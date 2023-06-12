import { ipcMain } from 'electron'
import { getLink } from './getLink'
import { validate } from './validate'
import { browser } from './login'
import { batchApplication, browsers } from './batchApplication'

const parseAccount = text => text.split('\n').filter(Boolean).map(v => {
	v = v.split(/(——|-)+/).filter(v => !['-', '——'].includes(v))
	return v
})

ipcMain.handle('gpt-link', async (event, arg) => {
  const { text } = arg
	const accounts = parseAccount(text)

	const links = []
	for(let i = 0; i < accounts.length; i++) {
		const [user, pass] = accounts[i]
		const link = await getLink({ user, pass, index: i, id: user })
		links.push({
			i,
			user,
			link
		})
		console.log('process', i, user, link)
	}
	browser && browser.close()
})

ipcMain.handle('gpt-result', async (event, arg) => {
	const { text } = arg
	const accounts = parseAccount(text)

	const links = []
	for(let i = 0; i < accounts.length; i++) {
		const [user, pass] = accounts[i]
		const link = await validate({ user, pass, index: i, id: user })
		links.push({
			i,
			user,
			link
		})
		console.log('process', i, user, link)
	}
	// browser && browser.close()
})


ipcMain.handle('gpt-batch-4.0', async (event, arg) => {
	const { text } = arg
	const accounts = parseAccount(text)

	const links = []
	for(let i = 0; i < accounts.length; i++) {
		const [user, pass] = accounts[i]
		const link = await batchApplication({ user, pass, index: i, id: user })
		links.push({
			i,
			user,
			link
		})
		console.log('process', i, user, link)
	}
	// browsers.forEach(browser => browser.close())
})


const actions = {
	'gpt-link': getLink,
	'gpt-result': validate,
	'gpt-batch-4.0': batchApplication
}

export async function runActions(action: keyof typeof actions, options: any) {
	const { text } = options
	const accounts = parseAccount(text)

	const links = []
	for(let i = 0; i < accounts.length; i++) {
		const [user, pass] = accounts[i]
		const link = await batchApplication({ user, pass, index: i, id: user })
		links.push({
			i,
			user,
			link
		})
		console.log('process', i, user, link)
	}
	browsers.forEach(browser => browser.close())
}
