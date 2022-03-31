import { domReady } from './utils'
import { useLoading } from './loading'

const { appendLoading, removeLoading } = useLoading()
window.removeLoading = removeLoading

domReady().then(appendLoading)
