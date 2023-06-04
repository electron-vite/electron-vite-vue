import { clog, loginGoogle } from './login'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { EOL } from 'os'

export async function validate (options) {
	const log = clog(options)
	log('开始', { ident: 'poe-validate' })
	const page = await loginGoogle(options)

	await Promise.all([
		page.waitForNavigation(),
		page.goto('https://poe.com/settings')
	])

	log('已进入设置页面, 检查中', { ident: 'poe-validate' })

	const length = await page.$$eval('.SettingsSubscriptionSection_botLimitSection__j4mSO > div:first-child > div', (doms) => doms.length)
	// page.close()

	// if (options.index === 0) {
	// 	writeFileSync(resolve('./validate.txt'), '', 'utf8')
	// }
	// const fileContent = readFileSync(resolve('./validate.txt'), 'utf8')
	const resultTxt = length === 1 ? '失败😭' : '成功😘'
	// writeFileSync(resolve('./validate.txt'), fileContent + `${options.index + 1} ${options.user}----${resultTxt}${EOL}`, 'utf8')

	log(resultTxt, { type: length === 1 ? 'fail' : 'success', result: length === 1 ? '失败😭' : '成功😘' })
	// // 不成功
	// if (length === 1) {

	// } else {
	// 	log('充值成功😘')
	// }
}

function resolve (url) {
	return path.resolve(__dirname, '../src/poe/', url)
}
