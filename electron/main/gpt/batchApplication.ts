import type { Browser, Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { clog } from "../tools";
import { awaitWrap, randomNum } from '../tools';
import login from '../login'
import Mock from 'mockjs'
import axios from 'axios'
import { SocksProxyAgent } from 'socks-proxy-agent'
import proxyChain from 'proxy-chain'
// const proxyChain = require('proxy-chain');

puppeteer.use(StealthPlugin())


function getProxy(options = {} as any) {
  const log = clog(options)
  log('开始获取代理ip')
  return axios.get('http://api.proxy.ipidea.io/getBalanceProxyIp?num=1&return_type=json&lb=1&sb=0&flow=1&regions=&protocol=socks5', {
  // return axios.get('https://www.miyaip.com/api/ProxyGenerage/PublicGenerateProxy?country=us&city=jaffrey®ion=nh&num=1&apiSwitch=0&mealType=2&genType=2&username=nmfk549724@163.com&secret=E3BCBmiyaipC23358C250F5', {
    // return axios.get('http://api.tianqiip.com/getip?secret=loy0r7fpmnlshm8l&num=1&type=json&port=3&time=3&mr=1&sign=5f73ab58ad7ab40346311014bef59b79', {
    timeout: 10 * 1000,
  }).then(res => {
    
    // // const [user, pass] = res.data.split(':')
    // // return { user, pass, ip, port }
    // // // return axios.get('https://www.miyaip.com/api/ProxyGenerage/PublicGenerateProxy?country=us&city=cairo®ion=ny&num=1&apiSwitch=0&mealType=2&genType=2&username=nmfk549724@163.com&secret=E3BCBmiyaipC23358C250F5').then(res => {
    // const [ip, port] = res.data.replace(/(\n|\r\s)/g, '').split(':')
    // console.log({ ip, port, })
    // // const [ip, pory, user, pass] = res.data.split(':')
    return res.data.data[0]
  })
  return Promise.resolve({
    ip: '43.130.10.70',
    port: '22993',
    // user: '1E783B07miyaip489C251B3FA7',
    // pass: '1g7E3M4U5w03vO'
  })
}

// 获取组织id
async function getOrgId(page: Page, options: any) {
  const log = clog(options)
  log('准备进入组织页面')
  await page.goto('https://platform.openai.com/account/org-settings')
  await page.waitForSelector('input')
  log('开始获取组织id')
  const orgId = await page.$$eval('input', (inputs: HTMLInputElement[]) => inputs?.[1].value || '')
  log('获取组织id成功', { orgId })
  return orgId
}

// 申请
export async function application(page: Page, options = {} as any) {
  const log = clog(options)

  log('准备进入申请页面')
  await page.goto('https://openai.com/waitlist/gpt-4-api')

  log('等待出现输入框')
  await page.waitForSelector('input')

  log('开始申请')

  const f = Mock.mock('@first')
  const l = Mock.mock('@last')
  console.log(f, l);

  await page.type('#firstname', f)
  await page.type('#lastname', l)
  await page.type('#email', options.user)
  await page.type('#organizationId', options.orgId)

  const i = randomNum(1, 4)

  log('选择申请类型', { i })
  page.evaluate((i) => {
    document.querySelector('#primaryUse').nextSibling.childNodes[i].childNodes[1].click()
  }, i)

  log('等待 gpt 生成描述')
  const desc = await generateDescription(i)
  await page.type('#ideas', desc)

  log('点击提交申请')
  const isSuccess = await page.evaluate((selector, searchText) => {
    const elements = Array.from(document.querySelectorAll(selector));
    const target = elements.find(el => el.textContent.trim() === searchText);

    if (target) target.click()
    return !!target
  }, 'button', 'Join waitlist')

  if (isSuccess) {
    log('提交成功，等待 gpt 返回结果')
    console.log('isSuccess', isSuccess)
    await page.waitForSelector('button[type="submit"] + .ui-richtext')
    const text = await page.evaluate(() => document.querySelector('button[type="submit"] + .ui-richtext').textContent)
    log('gpt 返回已结果', { result: text })
  }


  // await page.click('form[data-gtm-form-interact-id] button[type="submit"]')
}


// 生成描述
export async function generateDescription(desIndex = 0): Promise<string> {
  const types = {
    1: 'Build a new product',
    2: 'Integrate into an existing product',
    3: 'General exploration of capabilities',
    4: 'Academic research',
  }

  return axios({
    url: 'https://api.openai-proxy.com/v1/chat/completions',
    method: 'post',
    headers: {
      Authorization: `Bearer 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`
    },
    data: {
      max_tokens: 1024,
      model: 'gpt-3.5-turbo',
      messages: [
        { "role": "user", "content": `我在申请gpt4.0，我的类型是 ${types[desIndex]}，不要解释，给我一段申请的理由，以我的身份，以英语形式发给我，结尾不要带任何名字或位置，三四句话就行` },
      ]
    },
    timeout: 1000 * 30,
  }).then(res => {
    console.log('gpt 生成描述', res.data.choices[0].message.content)
    return res.data.choices[0].message.content
  })
}

export async function batchApplication(options) {
  const log = clog(options)
  log('开始', { ident: 'gpt-batch-4.0' })

  const [error, [page, browser]] = await awaitWrap(login.openai(options))
  if (error) return log('登录失败', { error, ident: 'gpt-batch-4.0' })

  await page.waitForSelector('.ovr-section')

  const orgId = await getOrgId(page, options)
  options.orgId = orgId
  console.log('orgId', orgId)

  await application(page, options)

  browser.close()
}
