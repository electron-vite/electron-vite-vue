import type { Page } from "puppeteer"
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import RecaptchaPlugin from 'puppeteer-extra-plugin-recaptcha'
import chromeLauncher from 'chrome-launcher'
import { win } from './index'
import fakeUa from 'fake-useragent'
import axios from "axios"
puppeteer.use(StealthPlugin())
puppeteer.use(RecaptchaPlugin({
	provider: {
		id: '2captcha',
		token: '25bd4a3638f3836b0d119007cbc21954'
	},
	visualFeedback: true
}))


export function test1() {
  // puppeteer-extra is a drop-in replacement for puppeteer,
  // it augments the installed puppeteer with plugin functionality
  const puppeteer = require('puppeteer-extra')

  // add recaptcha plugin and provide it your 2captcha token (= their apiKey)
  // 2captcha is the builtin solution provider but others would work as well.
  // Please note: You need to add funds to your 2captcha account for this to work
  const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
  puppeteer.use(
    RecaptchaPlugin({
      provider: {
        id: '2captcha',
        token: '25bd4a3638f3836b0d119007cbc21954' // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
      },
      visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
    })
  )

  // puppeteer usage as normal
  puppeteer.launch({ headless: false }).then(async browser => {
    const page = await browser.newPage()
    await page.goto('https://www.google.com/recaptcha/api2/demo')

    // That's it, a single line of code to solve reCAPTCHAs 🎉
    const {
			captchas,
			filtered,
			solutions,
			solved,
			error
		} = await page.solveRecaptchas()

		console.log({ captchas, filtered, solutions, solved, error })

    await Promise.all([
      page.waitForNavigation(),
      page.click(`#recaptcha-demo-submit`)
    ])
    await page.screenshot({ path: 'response.png', fullPage: true })
    await browser.close()
  })
}

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

export async function browserAndPage (options: any = {}) {
	const { request, changeUS = true, proxy = false } = options

	async function proxyCommand () {
		// const proxy = (await axios.get('http://127.0.0.1:10101/api/get_ip_list?num=1&country=US&state=all&city=all&zip=all&isp=all&t=1&port=40000&ip_time=1')).data
		console.log('proxy', proxy);
		
		// return proxy ? 
		return `--proxy-server=socks5://127.0.0.1:40000`
	}

	const args = [
		'--no-sandbox',
		'--disable-setuid-sandbox',
	]

	// proxy ? args.push(await proxyCommand()) : null
	console.log(args, proxy);
	
	// proxy ? args.push(await proxyCommand()) : ''

	const browser = await puppeteer.launch({
		headless: false,
		args
	})

	browsers.push(browser)
	const close = browser.close
	browser.close = async function () {
		let i = browsers.find(b => b === browser)
		await close.call(this)
		if (i !== -1) browsers.slice(i, 1)
	}

	const page = await browser.newPage()
	console.log('fakeUa', fakeUa());
	
	changeUS && page.setUserAgent(fakeUa())
	await page.setExtraHTTPHeaders({
		'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
	})

	if (request) pageRequest(page)
	
	return { browser, page }
}

function getProxy () {
	return axios({
		url: 'http://api.tianqiip.com/getip?secret=loy0r7fpmnlshm8l&num=1&type=json&port=3&time=5&mr=1&sign=5f73ab58ad7ab40346311014bef59b79',
		method: 'get',
	}).then(res => {
		console.log('proxy', res.data.data[0])
		return res.data.data[0]
	}).catch(err => {
		console.log(err)
	})
}


/**
 * 记录日志
 */
export function clog(options) {
	return (info, data = {}) => {
		if (win) {
			win?.webContents?.send?.('progress', { ...options, info, ...data })
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
export async function statusCheck(
	operationsFn: Function, 
	checkFn: Function, 
	options: {interval?: number, tryCount?: number} = {}
) {
	options.interval = options.interval ?? 1000
	options.tryCount = options.tryCount ?? 1
	let { interval, tryCount } = options
	const { p, resolve, reject } = createPromise<boolean>()
	await operationsFn()
	const pass = await checkFn()
	console.log('检查状态', !!pass)
	if (pass) {
		resolve(true)
	} else {
		if (tryCount <= 5) {
			await sleep(interval)
			options.tryCount++
			return await statusCheck(operationsFn, checkFn, options)
		} else {
			resolve(false)
		}
	}

	return p
}

export function sleep (time = 1000) {
	return new Promise((resolve) => {
		setTimeout(resolve, time)
	})
}

/**
 * 将方法重试n次
 */
export function retry(fn: Function, tryCount = 1) {
	return async function (...args) {
		try {
			return await fn(...args)
		} catch (error) {
			if (tryCount <= 5) {
				await sleep(1000)
				tryCount++
				return await retry(fn, tryCount)(...args)
			} else {
				throw error
			}
		}
	}
}
