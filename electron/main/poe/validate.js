import login from '../login'
import path from 'path'
import { clog } from '../tools'

export async function validate (options) {
	const log = clog(options)
	log('开始', { ident: 'poe-validate' })
	const [page, browser] = await login.poe_google(options)

	await Promise.all([
		page.waitForNavigation(),
		page.goto('https://poe.com/settings')
	])

	log('已进入设置页面, 检查中', { ident: 'poe-validate' })

	const length = await page.$$eval('.SettingsSubscriptionSection_botLimitSection__j4mSO > div:first-child > div', (doms) => doms.length)
	const resultTxt = length === 1 ? '失败😭' : '成功😘'
	log(resultTxt, { type: length === 1 ? 'fail' : 'success', result: length === 1 ? '失败😭' : '成功😘' })

	browser.close()
}

function resolve (url) {
	return path.resolve(__dirname, '../src/poe/', url)
}
