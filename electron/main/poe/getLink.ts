import { clog } from '../tools'
import type { Page } from 'puppeteer'
import path from 'path'
import login from '../login'

function existDialog(page: Page) {
	return page.evaluate((selector, searchText) => {
		const elements = Array.from(document.querySelectorAll(selector));
		const target = elements.find(el => el.textContent.trim() === searchText);
		target && target.click()

		return !!target
	}, 'button', 'Start free trial')
}

export async function getLink(options) {
	const log = clog(options)
	log('开始', { ident: 'poe-link' })
	return login.poe_google(options).then(async ([page, browser]) => {
		await page.waitForTimeout(1000)
		const isExistDialog = await existDialog(page)

		isExistDialog && log('检测到充值弹窗，无需前往设置页')

		if (!isExistDialog) {
			await Promise.all([
				page.waitForNavigation(),
				page.goto('https://poe.com/settings')
			])
			log('已进入设置页面, 检查中')
			await page.waitForSelector('[class*=SettingsSubscriptionSection_subscribeButton]')
			log('点击显示订阅套餐按钮')
			await page.click('[class*=SettingsSubscriptionSection_subscribeButton]')
		}

		log('显示更多套餐')
		await page.waitForSelector('[class*=WebSubscriptionFreeTrial_viewAllPlansButton]')
		await page.click('[class*=WebSubscriptionFreeTrial_viewAllPlansButton]')
		log('点击最后一个套餐')
		await page.waitForSelector('[class*=WebSubscriptionPaywall_plans]')
		await page.click('[class*=WebSubscriptionPaywall_plans] > button:last-child')

		// 点击订阅
		log('4, 开始点击订阅')
		page.click('[class*=WebSubscriptionPaywall_button]')
		const [response] = await Promise.all([
			page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
		])

		if (response.ok()) {
			const url = response._request._frame._url
			log('获取链接成功', { result: url, type: 'success' })
			browser.close()
			return url
		}
		browser.close()
	}).catch(error => {
		console.log('error ->', error.try, error.text, error)
		if (error?.try) {
			return getLink(options)
		}
	})

}


function resolve(url) {
	return path.resolve(__dirname, '../src/poe/', url)
}
