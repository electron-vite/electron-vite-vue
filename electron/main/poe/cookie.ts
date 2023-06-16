import type { Browser, Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { browserAndPage, browsers, clog, createPromise, statusCheck } from "../tools"
import login from '../login'
puppeteer.use(StealthPlugin())

export async function getCookie(options) {
  console.log('options', options);
  const log = clog(options)
  log('开始', { ident: 'link_7day' })

  let { p, resolve, reject } = createPromise<string>()

  login.mail_get_code({ ...options, changeUS: false }).then(async ([page, browser, options]) => {
    const isOk = await statusCheck(
      () => options.code,
      async () => {
        log('未获取验证码，重试一次', { ident: 'link_7day' })
        options.code = await options.validateCode()
        return options.code
      },
      { interval: 4000 }
    )
    resolve(options.code)
    browser.close()
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
  }).catch(() => '' as any)

  // 登录失败了
  if (!page) {
    console.log('登录失败了')
    browsers.map(b => b.close())
    return
  }

  const cookies = await page.cookies()
  const token = cookies.find(v => v.name === 'p-b')?.value

  log('获取token', { result: token })
  console.log('cookies', cookies)
  // browser.close()
  // await page.waitForTimeout(2000)
  browser.close()
  // const { page } = await login.poe_email(options)
}

async function recharge(options: {
  browser: Browser,
  page: Page,
  user: string,
  liao: any,
}) {
  const { browser, page, liao, ...args } = options
  const log = clog(args)
  log('开始充值')
  await page.waitForSelector('#cardNumber')

  await page.evaluate(() => {
    const btn: HTMLElement = document.querySelector('.AddressAutocomplete-manual-entry .Link')
    if (btn) btn.click()
  })

  await page.evaluate((email: string) => {
    const el: HTMLInputElement = document.querySelector('#email')
    if (el) el.value = email
  }, options.user)

  await page.type('#cardNumber', liao.bank)
  await page.type('#cardExpiry', liao.date)
  await page.type('#cardCvc', liao.cvc)
  await page.type('#billingName', liao.name)
  await page.select('#billingCountry', liao.nation)
  await page.type('#billingAddressLine1', liao.address)
  await page.type('#billingLocality', liao.city)
  await page.type('#billingPostalCode', liao.postalCode)
  await page.waitForTimeout(1000)
  await page.click('.SubmitButton-IconContainer')

  // await page.waitForTimeout(9000)

  // await page.waitForSelector('iframe')
  // let $frame = await page.$('iframe')
  // let frame = await $frame.contentFrame()

  // console.log('$frame', $frame)
  // // console.log('frame', frame)
  // await $frame.waitForSelector('iframe')
  // $frame = await frame.$('iframe')
  // frame = await $frame.contentFrame()
  // await frame.waitForSelector('iframe')
  // $frame = await frame.$('iframe')
  // frame = await $frame.contentFrame()

  // await frame.waitForSelector('#checkbox', { timeout: 0 })
  // await frame.click('#checkbox')
  // await page.waitForNavigation()
  console.log('充值成功')
  log('充值成功')
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
    await page.waitForSelector('[class*=SettingsSubscriptionSection_subscribeButton]', { timeout: 0 })

    page.waitForTimeout(500)
    log('点击显示订阅套餐按钮')
    // await page.click('[class*=SettingsSubscriptionSection_subscribeButton]')

    const disabled = await page.$eval('[class*=SettingsSubscriptionSection_subscribeButton]', (el: HTMLButtonElement) => el.disabled)
    if (disabled) {
      log('订阅按钮不可用，地区不可用')
      return
    }

    await statusCheck(
      async () => {
        return page.evaluate(() => {
          const $el = document.querySelector("[class*=SettingsSubscriptionSection_subscribeButton]")
          console.log('$el', $el)
          $el.click();
        })
      },
      // async () => page.click('[class*=SettingsSubscriptionSection_subscribeButton]'),
      async () => page.$('.Modal_modal__SxITf'),
    )
  }

  // log('显示更多套餐')
  // await page.waitForSelector('[class*=WebSubscriptionFreeTrial_viewAllPlansButton]')
  // await page.click('[class*=WebSubscriptionFreeTrial_viewAllPlansButton]')
  // log('点击最后一个套餐')
  // await page.waitForSelector('[class*=WebSubscriptionPaywall_plans]')
  // await page.click('[class*=WebSubscriptionPaywall_plans] > button:last-child')

  // 点击订阅
  log('4, 开始点击订阅')
  await page.waitForSelector('[class*=WebSubscriptionPaywall_button]', { timeout: 0 })
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
