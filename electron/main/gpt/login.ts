import type { Browser, Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { randomNum } from '../tools'
import { win } from '../index'
import { clog } from '../poe/login'
puppeteer.use(StealthPlugin())

let id
export let browser: Browser | undefined
/**
 * 登录google
 */
export async function login(options, tryCount = 1): Promise<Page> {
	let resolve, reject
	const log = clog(options)
	const p = new Promise((res, rej) => {
		resolve = res
		reject = rej
	})
	id = options.id
	const env = {
		GUSER: options.user,
		GPASS: options.pass
	}

	if (browser) await browser.close()

	browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()
	await page.setExtraHTTPHeaders({
		'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
	})

	log('开始访问 gpt')
	await page.goto('https://chat.openai.com/auth/login')
	await page.waitForSelector('button')

	// log('准备进入 google 登录页')
	const [response] = await Promise.all([
		page.waitForNavigation(() => location.href.startsWith('https://auth0.openai.com/u/login/identifier')),
		page.click('button')
	])
	// log('已进入 google 登录页')

	if (!response.ok()) return log('进入 google 登录页失败')

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
		page.waitForNavigation(() => location.href === 'https://chat.openai.com/'),
		page.keyboard.press('Enter')
	])
	log('登录成功')
	resolve(page)

	// if (response.ok()) {
	// 	await page.waitForSelector('input[type="email"]')
	// 	log('准备输入账号')
	// 	await page.type('input[type="email"]', env.GUSER)
	// 	await Promise.all([
	// 		page.waitForNavigation(),
	// 		await page.keyboard.press('Enter')
	// 	])
	// 	log('已输入账号，准备输入密码')
	// 	await page.waitForSelector('input[type="password"]', { visible: true })
	// 	await page.type('input[type="password"]', env.GPASS)
	// 	log('已输入密码，开始登录')
	// 	await Promise.all([
	// 		page.waitForFunction(() => location.href === 'https://poe.com/'),
	// 		await page.keyboard.press('Enter')
	// 	])

	// 	log('登录成功，准备进入 poe')

	// 	return page
	// }

	// if (tryCount < 4) {
	// 	log(`google 登录失败，准备 ${tryCount} 次重试`)
	// 	await page.close()
	// 	return await loginGoogle(options, tryCount + 1)
	// } else {
	// 	log('google 登录失败，重试次数已达上限')
	// 	reject('google 登录失败')
	// }

	return p
	// return Promise.reject('google 登录失败')
}
