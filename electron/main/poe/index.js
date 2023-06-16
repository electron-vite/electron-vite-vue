import { getLink } from './getLink'
import { validate } from './validate'
import { ipcMain } from 'electron'
import { link_7day } from './link_7day'
import { getCookie } from './cookie'
import { browserAndPage } from '../tools'

export const parseAccount = text => text.split('\n').filter(Boolean).map(v => {
	v = v.split(/(——|-)+/).filter(v => !['-', '——'].includes(v))
	return v
})

ipcMain.handle('getLink', async (event, arg) => {
	const { text } = arg
	const accounts = parseAccount(text)

	const links = []
	for (let i = 0; i < accounts.length; i++) {
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
	return links
})

ipcMain.handle('get-poe-link-7day', async (event, arg) => {
	const { text, liao } = arg
	const accounts = parseAccount(text)

	const links = []
	for (let i = 0; i < accounts.length; i++) {
		const [user, pass, auxiliary] = accounts[i]
		const link = await link_7day({ user, pass, auxiliary, index: i, id: user, liao })
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
	return links
})



ipcMain.handle('get-poe-cookie', async (event, arg) => {
	const { text, liao } = arg
	const accounts = parseAccount(text)

	const links = []
	for (let i = 0; i < accounts.length; i++) {
		const [user, pass, auxiliary] = accounts[i]
		const link = await getCookie({ user, pass, auxiliary, index: i, id: user, liao })
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
	return links
})


ipcMain.handle('poe-result', async (event, arg) => {
	const { text } = arg
	const accounts = parseAccount(text)

	const links = []
	for (let i = 0; i < accounts.length; i++) {
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
	return links
})

ipcMain.handle('start-one-chrom', async (event, arg) => {
	browserAndPage({ proxy: true })
})
