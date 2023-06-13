import type { Page } from "puppeteer"
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import chromeLauncher from 'chrome-launcher'
import { win } from './index'
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
	page.setRequestInterception(true)
	page.on('request', (request) => {
		if (['stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
			request.abort()
		} else {
			request.continue()
		}
	})
}

export const browsers = []

export async function browserAndPage (options = {}) {
	const { request } = options
	const browser = await puppeteer.launch({
		headless: false,
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			// `--proxy-server=http://
		]
	})
	browsers.push(browser)
	const close = browser.close
	browser.close = async function () {
		let i = browsers.find(b => b === browser)
		await close.call(this)
		if (i !== -1) browsers.slice(i, 1)
	}

	const page = await browser.newPage()
	await page.setExtraHTTPHeaders({
		'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
	})

	if (request) pageRequest(page)
	
	return { browser, page }
}

/**
 * 记录日志
 */
export function clog(options) {
	return (info, data = {}) => {
		if (win) {
			win.webContents.send('progress', { ...options, info, ...data })
		}
	}
}

/**
 * 创建一个 promise
 */
export function createPromise<T> () {
	let resolve:  (value: T | PromiseLike<T>) => void, 
			reject
	const p = new Promise<T>((res, rej) => {
		resolve = res
		reject = rej
	})
	return { resolve, reject, p }
}

async function findElement (page: Page, selector: string, searchText: string) {
	return page.evaluate((selector, searchText) => {
		const elements = Array.from(document.querySelectorAll(selector));
		const target = elements.find(el => el.textContent.trim() === searchText);
		return target
	}, selector, searchText)
}

/**
 * 元素检查，被点击或按下按键后，检查是否成功，不成功测重试或其他操作
 */
export async function elCheck(operationsFn: Function, checkFn: Function, tryCount = 1) {
	const { p, resolve, reject } = createPromise<boolean>()
	await operationsFn()
	const pass = await checkFn()
	if (pass) {
		resolve(true)
	} else {
		if (tryCount > 1) {
			return await elCheck(operationsFn, checkFn, tryCount - 1)
		} else {
			resolve(false)
		}
	}

	return p
}
