import type { Browser, Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { browserAndPage, clog, createPromise } from "../tools"
import login from '../login'
puppeteer.use(StealthPlugin())

export async function link_7day(options) {
  const log = clog(options)
  log('开始', { ident: 'link_7day' })

  let { p, resolve, reject } = createPromise()
  login.mail_get_code(options).then(([page, browser, options]) => {
    if (options.code) {
      resolve(options.code)
      browser.close()
    } else {
      log('未获取验证码，重试一次', { ident: 'link_7day' })
      setTimeout(async () => {
        const code = await options.validateCode()
        if (code) {
          browser.close()
          resolve(code)
        }else {
          setTimeout(async () => {
            const code = await options.validateCode()
            if (code) {
              browser.close()
              resolve(code)
            }else {
              resolve('')
            }
          }, 3000);
        }
      }, 3000);
    }
  })
  const [page, browser] = await login.poe_email(options, async () => {
    const code = await p
    console.log('获取验证码结果', code)
    if (!code) {
      log('获取验证码失败', { ident: 'link_7day' })
      reject('获取验证码失败')
      throw '获取验证码失败'
    }

    return code
  })

  await getLink(options, [page, browser])

  browser.close()
  // await page.waitForTimeout(2000)
  // browser.close()
  // const { page } = await login.poe_email(options)
}

function existDialog(page: Page) {
  return page.evaluate((selector, searchText) => {
    const elements = Array.from(document.querySelectorAll(selector));
    const target = elements.find(el => el.textContent.trim() === searchText);
    target && target.click()

    return !!target
  }, 'button', 'Start free trial')
}

export async function getLink(options, [page, browser]: [Page, Browser]) {
  const log = clog(options)
  log('开始', { ident: 'poe-link' })
  await page.waitForTimeout(1000)
  const isExistDialog = await existDialog(page)

  isExistDialog && log('检测到充值弹窗，无需前往设置页')

  if (!isExistDialog) {
    await Promise.all([
      page.waitForNavigation(),
      page.goto('https://poe.com/settings')
    ])
    log('已进入设置页面, 检查中')

    const existMange = await page.evaluate(() => {
      const mange = document.querySelector('[class*="SettingsSubscriptionSection_manageSubscription"]')
      if (mange) return true
      return false
    })

    if (existMange) {
      log('已经订阅')
      return
    }
    await page.waitForSelector('[class*=SettingsSubscriptionSection_subscribeButton]')

    page.waitForTimeout(500)
    log('点击显示订阅套餐按钮')
    await page.click('[class*=SettingsSubscriptionSection_subscribeButton]')
  }

  // log('显示更多套餐')
  // await page.waitForSelector('[class*=WebSubscriptionFreeTrial_viewAllPlansButton]')
  // await page.click('[class*=WebSubscriptionFreeTrial_viewAllPlansButton]')
  // log('点击最后一个套餐')
  // await page.waitForSelector('[class*=WebSubscriptionPaywall_plans]')
  // await page.click('[class*=WebSubscriptionPaywall_plans] > button:last-child')

  // 点击订阅
  log('4, 开始点击订阅')
  await page.waitForSelector('[class*=WebSubscriptionPaywall_button]')
  page.click('[class*=WebSubscriptionPaywall_button]')
  const [response] = await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
  ])

  if (response.ok()) {
    const url = response._request._frame._url
    log('获取链接成功', { result: url, type: 'success' })
    return url
  }
}
