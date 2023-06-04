import { clog, loginGoogle } from './login'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { EOL } from 'os'

export async function getLink(options) {
	const log = clog(options)
	log('开始', { ident: 'poe-link' })
	const page = await loginGoogle(options)

	await Promise.all([
		page.waitForNavigation(),
		page.goto('https://poe.com/settings')
	])

	log('已进入设置页面, 检查中')

	// page.waitForTimeout(1000)
	await page.waitForSelector('[class*=SettingsSubscriptionSection_subscribeButton]')
	log('1, 开始点击显示订阅套餐按钮')
	await page.click('[class*=SettingsSubscriptionSection_subscribeButton]')
	log('2, 开始点击显示更多套餐')
	await page.waitForSelector('[class*=WebSubscriptionFreeTrial_viewAllPlansButton]')
	await page.click('[class*=WebSubscriptionFreeTrial_viewAllPlansButton]')
	log('3, 开始点击最后一个套餐')
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
}


function resolve(url) {
	return path.resolve(__dirname, '../src/poe/', url)
}
