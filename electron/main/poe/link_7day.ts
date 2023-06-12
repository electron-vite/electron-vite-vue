import type { Browser, Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { clog } from "./login"
puppeteer.use(StealthPlugin())

async function login (options) {
  const log = clog(options)

  log('启动浏览器')

  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // `--proxy-server=http://192.168.1.80:7890`,
    ]
  })

  const page = await browser.newPage()
  await page.setExtraHTTPHeaders({
    'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
  })

  log('正在进入登录页面')
  await page.goto('https://poe.com/login')

  log('设置登录方式')
  await page.evaluate((selector, searchText) => {
    const elements = Array.from(document.querySelectorAll(selector));
    const target = elements.find(el => el.textContent.trim() === searchText);

    if (!target) return false
    
    const text = target.nextElementSibling?.textContent || ''
    if (text.includes('email')) target.nextElementSibling.click()
  }, 'button', 'Go')

  await page.waitForSelector('input[type="email"]')
  await page.type('input[type="email"]', options.user)
  await page.keyboard.press('Enter')

}

export async function link_7day (options) {
  const log = clog(options)
  log('开始', { ident: 'link_7day' })
  await login(options)
}
