const { ipcRenderer } = require('electron')

window.stopLoading = function() {
  ipcRenderer.send('stop-loading-main')
}
