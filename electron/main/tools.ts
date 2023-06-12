import type { Page } from "puppeteer"
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
puppeteer.use(StealthPlugin())

//生成从minNum到maxNum的随机数
export function randomNum (min, max) {
	return parseInt(Math.random() * (max - min + 1) + min)
}

// promise 错误处理
export function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
	return promise
			.then<[null, T]>((data: T) => [null, data])
			.catch<[U, null]>(err => [err, null])
}

// 设置页面请求
export function pageRequest (page: Page) {
	page.on('request', (request) => {
		if (['stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
			request.abort()
		} else {
			request.continue()
		}
	})
}

const browsers = []

export async function browserAndPage (options) {
	const browser = await puppeteer.launch({
		headless: false,
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			// `--proxy-server=http://
		]
	})
	const close = browser.close
	browser.close = async () => {
		let i = browsers.find(b => b === browser)
		await close()
		if (i !== -1) browsers.slice(i, 1)
	}

	const page = await browser.newPage()
	await page.setExtraHTTPHeaders({
		'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
	})

	pageRequest(page)
	
	return { browser, page }
}
