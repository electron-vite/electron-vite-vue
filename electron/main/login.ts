import { clog } from './poe/login'
import { browserAndPage } from './tools'

const login = {
  // poe 邮箱登录
  async poe_email(options) {
    const log = clog(options)

    log('启动浏览器')

    const { page } = await browserAndPage(options)

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

    log('开始输入邮箱')
    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', options.user)
    await page.keyboard.press('Enter')
    log('开始输入密码')
  }
}

export default login
