import type { Browser, Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { clog } from "../poe/login";
import { awaitWrap, randomNum } from '../tools';
import Mock from 'mockjs'
import axios from 'axios'
import { SocksProxyAgent } from 'socks-proxy-agent'

puppeteer.use(StealthPlugin())


function getProxy() {
  return axios.get('http://api.proxy.ipidea.io/getBalanceProxyIp?num=1&return_type=json&lb=1&sb=0&flow=1&regions=us&protocol=socks5').then(res => {
    return res.data.data[0]
  })
}

export const browsers = new Map<string, Browser>()
// 登录
async function login(options = {} as any): Promise<Page> {
  const { user, pass } = options

  const proxy = await getProxy()
  const proxyUrl = `socks5://${proxy.ip}:${proxy.port}`
  const agent = new SocksProxyAgent(proxyUrl);

  console.log('proxy', proxy)

  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // `--proxy-server=${proxyUrl}`,
    ]
  })
  const page = await browser.newPage()
  browsers.set(user, browser)
  
  // await page.setRequestInterception(true);
  // page.on('request', (request) => {
  //   request.continue({
  //     agent
  //   });
  // });

  await page.setExtraHTTPHeaders({
    'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
  })

  // page.goto('https://ip.900cha.com/')

  // return

  // 进入
  await page.goto('https://platform.openai.com')

  // const [err, res] = await awaitWrap(page.waitForNavigation({ timeout: 10000 }))
  // if (err) throw err

  await page.waitForSelector('#username', { visible: true, timeout: 10000 })

  // 输入账号
  await page.type('#username', user)
  await Promise.all([
    page.waitForNavigation(),
    page.keyboard.press('Enter')
  ])

  await page.waitForSelector('#password', { visible: true })
  await page.type('#password', pass)


  await Promise.all([
    page.waitForNavigation({ timeout: 10000 }),
    page.keyboard.press('Enter')
  ])

  return page
}

// 获取组织id
async function getOrgId(page: Page) {
  await page.goto('https://platform.openai.com/account/org-settings')
  await page.waitForSelector('input')
  const orgId = await page.$$eval('input', (inputs: HTMLInputElement[]) => inputs?.[1].value || '')
  return orgId
}

// 申请
export async function application(page: Page, options = {} as any) {
  await page.goto('https://openai.com/waitlist/gpt-4-api')

  await page.waitForSelector('input')

  const f = Mock.mock('@first')
  const l = Mock.mock('@last')
  console.log(f, l);

  await page.type('#firstname', f)
  await page.type('#lastname', l)
  await page.type('#email', options.user)
  await page.type('#organizationId', options.orgId)

  const i = randomNum(1, 4)

  page.evaluate((i) => {
    document.querySelector('#primaryUse').nextSibling.childNodes[i].childNodes[1].click()
  }, i)

  const desc = await generateDescription(i)
  await page.type('#ideas', desc)

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

  const [error, page] = await awaitWrap(login(options))
  if (error) return log('登录失败', { error, ident: 'gpt-batch-4.0' })

  await page.waitForSelector('.ovr-section')

  const orgId = await getOrgId(page)
  options.orgId = orgId
  console.log('orgId', orgId)

  application(page, options)

}
