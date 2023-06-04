import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
puppeteer.use(StealthPlugin())

;(async () => {
	const browser = await puppeteer.launch({ headless: false })
	browser.newPage()
})()
