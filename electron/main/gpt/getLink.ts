import { clog } from "../tools";
import login from "../login";

export async function getLink(options) {
	const log = clog(options)
	log('开始', { ident: 'gpt-link', ...options })
	const [page, browser] = await login.chatgpt({ ...options, changeUS: false })

	// await page.waitForTimeout(500)

	await page.waitForSelector('body > div.absolute.inset-0', { timeout: 0 })
	await page.evaluate(() => {
		const $mark = document.querySelector("body > div.absolute.inset-0")
		if ($mark) $mark.hidden = true
		document.body.style.pointerEvents = 'all'
	})

	log('隐藏欢迎页面')

	await page.waitForSelector('.gold-new-button', { visible: true })
	log('等待升级plus按钮出现')
	await page.waitForTimeout(500)

	log('开始点击升级plus按钮')
	await page.click('.gold-new-button')

	const [response] = await Promise.all([
		page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 0 }),
		page.evaluate((selector, searchText) => {
			const elements = Array.from(document.querySelectorAll(selector));
			const target = elements.find(el => el.textContent.trim() === searchText);
			target && target.click()
		}, 'button', 'Upgrade plan')
	])

	if (response.ok()) {
		const url = response._request._frame._url
		log('获取链接成功', { result: url, type: 'success' })
		browser.close()
		return url
	}
	browser.close()
}
