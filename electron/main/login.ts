import { Page } from 'puppeteer'
import { browsers, clog, elCheck } from './tools'
import { awaitWrap, browserAndPage, randomNum } from './tools'
import { Browser } from 'puppeteer'

const login = {
  // poe 邮箱登录
  async poe_email(options, getCodeFn: Function): Promise<[Page, Browser]> {
    const log = clog(options)

    log('启动浏览器')

    const { browser, page } = await browserAndPage(options)

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
    await page.waitForTimeout(1000)
    // elCheck()
    await page.keyboard.press('Enter')
    log('开始输入密码')

    await page.waitForSelector('input[class^="VerificationCodeInput_verificationCodeInput"]')
    const code = await getCodeFn(options, { page, browser })

    await page.type('input[class^=VerificationCodeInput_verificationCodeInput]', code)
    await page.keyboard.press('Enter')

    await page.waitForNavigation()

    return [page, browser]
  },

  async poe_google(options, tryCount = 1): Promise<[Page, Browser]> {
    let resolve: (value: [Page, Browser] | PromiseLike<[Page, Browser]>) => void,
      reject
    const log = clog(options)
    const p = new Promise<[Page, Browser]>((res, rej) => {
      resolve = res
      reject = rej
    })

    const env = {
      GUSER: options.user,
      GPASS: options.pass
    }
    const { browser, page } = await browserAndPage(options)

    log('开始访问 poe')
    await page.goto('https://poe.com')
    log('已进入 poe')
    await page.waitForTimeout(randomNum(1000, 2600))

    log('准备进入 google 登录页')

    page.click('.ContinueWithGoogleButton_buttonContentWrapper__Mrp0W')
    const [err, response] = await awaitWrap(page.waitForNavigation({ timeout: 10000 }))
    if (err) {
      reject({ text: '登录报错', try: true })
      return p
    }
    log('已进入 google 登录页')

    if (response.ok()) {
      await page.waitForSelector('input[type="email"]')
      log('准备输入账号')
      await page.type('input[type="email"]', env.GUSER)
      await Promise.all([
        page.waitForNavigation(),
        await page.keyboard.press('Enter')
      ])
      log('已输入账号，准备输入密码')
      if (await isError(page)) {
        reject({ text: '登录报错', try: true })
        return p
      }

      await page.waitForSelector('input[type="password"]', { visible: true })
      await page.type('input[type="password"]', env.GPASS)
      log('已输入密码，开始登录')
      await Promise.all([
        page.waitForFunction(() => location.href === 'https://poe.com/'),
        await page.keyboard.press('Enter')
      ])
      if (await isError(page)) {
        reject({ text: '登录报错', try: true })
        return p
      }

      log('登录成功，准备进入 poe')
      resolve([page, browser])

      return p
    }

    if (tryCount < 4) {
      log(`google 登录失败，准备 ${tryCount} 次重试`)
      await page.close()
      return await login.poe_google(options, tryCount + 1)
    } else {
      log('google 登录失败，重试次数已达上限')
      reject('google 登录失败')
    }

    return p
  },

  async openai(options): Promise<[Page, Browser]> {
    const { user, pass } = options
    const log = clog(options)

    log('启动浏览器')

    const { browser, page } = await browserAndPage(options)

    log('准备进入 gpt 登录')
    await page.goto('https://platform.openai.com')


    log('等待出现输入框')
    await page.waitForSelector('#username', { visible: true, timeout: 10000 })

    // 输入账号
    log('输入账号')
    await page.type('#username', user)
    await Promise.all([
      page.waitForNavigation(),
      page.keyboard.press('Enter')
    ])

    log('等待出现密码输入框')
    await page.waitForSelector('#password', { visible: true })
    log('输入密码')
    await page.type('#password', pass)


    log('准备登录')
    await Promise.all([
      page.waitForNavigation({ timeout: 10000 }),
      page.keyboard.press('Enter')
    ])

    log('登录成功')

    return [page, browser]
  },

  /**
   * 登录邮箱并获取验证码
   */
  async mail_get_code(options): Promise<[Page, Browser, {
    code?: string,
    validateCode: () => Promise<string>
  }]> {
    const { emailText = 'Poe' } = options
    const log = clog(options)
    const { browser, page } = await browserAndPage({ ...options })

    log('准备进入邮箱登录页')
    const [error] = await awaitWrap(page.goto('https://www.mail.com/', { waitUntil: 'domcontentloaded' }))

    await page.waitForSelector('.header-bar .button-login')
    await page.click('.header-bar .button-login')

    log('输入帐密')
    await page.waitForTimeout(500)
    await page.waitForSelector('input#login-email')
    await page.waitForTimeout(500)
    await page.type('input#login-email', options.user)
    await page.type('input#login-password', options.pass)
    await page.keyboard.press('Enter')
    log('开始登录')

    async function validateCode() {
      log('开始获取code')
      let $iframe = await page.$('#thirdPartyFrame_home')
      let frame = await $iframe?.contentFrame()

      if (!frame) {
        await page.reload()
        return await validateCode()
      }

      await frame.waitForSelector('.ico.sync')
      await frame.click('.ico.sync')
      await frame.waitForTimeout(1000)

      await frame.waitForSelector('ul.inbox-container li')
      log('查找邮箱')
      const $li = await frame.evaluate((emailText) => {
        const $li: any = Array.from(document.querySelectorAll('ul.inbox-container li')).find($li => {
          let sender = $li.querySelector('.sender')?.textContent || ''
          return sender.includes(emailText)
        })

        if ($li) $li.click()
        return $li
      }, emailText)

      if (!$li) {
        log('未找到邮箱')
        return ''
      } else {
        log('等待出现验证码 iframe')
        await page.waitForSelector('#thirdPartyFrame_mail')
        log('出现了验证码 iframe,寻找他的 iframe')
        $iframe = await page.$('#thirdPartyFrame_mail')
        frame = await $iframe?.contentFrame()

        await frame.waitForSelector('iframe#mail-detail')
        log('出现验证码 iframe')

        $iframe = await frame.$('iframe#mail-detail')
        frame = await $iframe?.contentFrame()

        log('等待验证码')
        await frame.waitForSelector('table table table ')
        const code = (await frame.$eval('table table table tr:nth-of-type(5)', el => el.textContent)) || ''
        return code.trim()
      }
    }

    await awaitWrap(page.waitForNavigation({ waitUntil: 'load' }))
    const code = await validateCode()

    log(`邮箱验证码 ${code}`)
    return [page, browser, { code, validateCode }]
  },

  async chatgpt(options, tryCount = 1): Promise<[Page, Browser]> {
    let resolve: (value: [Page, Browser] | PromiseLike<[Page, Browser]>) => void,
      reject
    const log = clog(options)
    const p = new Promise<[Page, Browser]>((res, rej) => {
      resolve = res
      reject = rej
    })

    const env = {
      GUSER: options.user,
      GPASS: options.pass
    }

    const { browser, page } = await browserAndPage(options)
    log('开始访问 gpt')
    await page.goto('https://chat.openai.com/auth/login')
    await page.waitForSelector('button')

    // log('准备进入 google 登录页')
    const [response] = await Promise.all([
      page.waitForNavigation({ timeout: 10000 }),
      page.click('button')
    ])
    // log('已进入 google 登录页')

    if (!response.ok()) {
      log('进入 google 登录页失败')
      reject('进入 google 登录页失败')
      return p
    }

    log('准备输入账号')
    await page.type('#username', env.GUSER)
    await Promise.all([
      page.waitForNavigation(),
      page.keyboard.press('Enter')
    ])

    log('已输入账号，准备输入密码')
    await page.waitForSelector('#password', { visible: true })
    await page.type('#password', env.GPASS)
    log('已输入密码，开始登录')

    await Promise.all([
      page.waitForNavigation({ timeout: 10000 }),
      page.keyboard.press('Enter')
    ])
    log('登录成功')
    resolve([page, browser])

    return p
  },

  closeAll() {
    browsers.map(b => b.close())
  }
}

export default login

async function isError(page: Page) {
  const text = await page.evaluate(() => (document.querySelector('p')?.textContent || ''));
  // const text = await page.evaluate('p', element => element.textContent);
  return text && text.includes('error')
}
