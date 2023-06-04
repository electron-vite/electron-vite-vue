import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { randomNum } from '../tools'
import { win } from '../index'
puppeteer.use(StealthPlugin())



let id
export let browser
/**
 * 登录google
 */
export async function loginGoogle(options, tryCount = 1) {
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

	log('开始访问 poe')
	await page.goto('https://poe.com')
	log('已进入 poe')
	await page.waitForTimeout(randomNum(1000, 2600))

	log('准备进入 google 登录页')
	const [response] = await Promise.all([
		page.waitForNavigation(() => location.href.startsWith('https://accounts.google.com')),
		page.click('.ContinueWithGoogleButton_buttonContentWrapper__Mrp0W')
	])
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
		await page.waitForSelector('input[type="password"]', { visible: true })
		await page.type('input[type="password"]', env.GPASS)
		log('已输入密码，开始登录')
		await Promise.all([
			page.waitForFunction(() => location.href === 'https://poe.com/'),
			await page.keyboard.press('Enter')
		])

		log('登录成功，准备进入 poe')

		return page
	}

	if (tryCount < 4) {
		log(`google 登录失败，准备 ${tryCount} 次重试`)
		await page.close()
		return await loginGoogle(options, tryCount + 1)
	} else {
		log('google 登录失败，重试次数已达上限')
		reject('google 登录失败')
	}

	return p
	// return Promise.reject('google 登录失败')
}


export function clog(options) {
	return (info, data = {}) => {
		if (win) {
			win.webContents.send('progress', {...options, info, ...data})
		}
	}
}
