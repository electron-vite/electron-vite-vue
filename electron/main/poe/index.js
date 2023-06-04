import { getLink } from './getLink'
import { validate } from './validate'
import { ipcMain } from 'electron'
import { browser } from './login'

// import './openBrowser'
// suzzettedeanne2393@gmail.com----zebulonlawayne3013----zebulonlawayne4749@outlook.com
const text = `
`

export const parseAccount = text => text.split('\n').filter(Boolean).map(v => {
	v = v.split(/(——|-)+/).filter(v => !['-', '——'].includes(v))
	return v
})

ipcMain.handle('getLink', async (event, arg) => {
	const { text } = arg
	const accounts = parseAccount(text)

	const links = []
	for(let i = 0; i < accounts.length; i++) {
		const [user, pass, auxiliary] = accounts[i]
		const link = await getLink({ user, pass, auxiliary, index: i, id: user })
		// .catch(err => {
		// 	console.log('error ->', err)
		// })
		links.push({
			i,
			user,
			link
		})
		console.log('process', i, user, link)
	}
	browser && browser.close()
	return links
})

ipcMain.handle('poe-result', async (event, arg) => {
	const { text } = arg
	const accounts = parseAccount(text)

	const links = []
	for(let i = 0; i < accounts.length; i++) {
		const [user, pass, auxiliary] = accounts[i]
		const link = await validate({ user, pass, auxiliary, index: i, id: user })
		// .catch(err => {
		// 	console.log('error ->', err)
		// })
		links.push({
			i,
			user,
			link
		})
		console.log('process', i, user, link)
	}
	browser && browser.close()
	return links
})
ipcMain.handle('stop', async (event, arg) => {
	browser && browser.close()
	return true
})
