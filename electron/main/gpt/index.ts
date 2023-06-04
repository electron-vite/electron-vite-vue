import { ipcMain } from 'electron'
import { getLink } from './getLink'
import { validate } from './validate'
import { browser } from './login'

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
