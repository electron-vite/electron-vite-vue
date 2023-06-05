import { clog, loginGoogle } from './login'
import type { Browser, Page } from 'puppeteer'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { EOL } from 'os'

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
	return loginGoogle(options).then(async (page: Page) => {
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
			return url

			// if (options.index === 0) {
			// 	writeFileSync(resolve('./hao.txt'), '', 'utf8')
			// }
			// const fileContent = readFileSync(resolve('./hao.txt'), 'utf8')
			// writeFileSync(resolve('./hao.txt'), fileContent + `${EOL}${options.index + 1} ${options.user}${EOL}${url}`, 'utf8')
		}
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
