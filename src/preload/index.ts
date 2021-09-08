import './communication'
import { domReady } from './utils/dom'
import { loading } from './loading'

domReady().then(loading)