# Build

```js
npm install
./node_modules/.bin/electron-rebuild
cp bin/your platform/cpp.node hello.node
```

# Copy to dist-electron/main

`hello.node` can only be required on the Main Thread and should be placed in the build directory of the Main Process entry file, so we need to copy it when building the project.

**vite.config.js**

```js
import { rmSync, copyFile, mkdirSync } from 'node:fs'
...
export default defineConfig(({ command }) => {
		rmSync('dist-electron', { recursive: true, force: true })
		
    mkdirSync('dist-electron/main', { recursive: true });
    copyFile('cpp/hello.node', 'dist-electron/main/hello.node', (err) => {
      if (err) { throw err; }
    });
    
    ...
})
```

# Communicate (Main/Render Thread)

Now you can load `hello.node` in the main thread and use it. In the render thread, you should send a message to the main thread to call a specific node module and get the result.

**electron/main/index.ts**

```js
import { ipcMain } from 'electron'
...
const addon = require('./hello.node')
ipcMain.on('render-process-message', (_event, ...args) => {
  win?.webContents.send('main-process-message', addon.hello())
})
```

**src/components/HelloWorld.vue**

```js
<script setup lang="ts">
import { ipcRenderer } from 'electron'
...

function increment() {
  ...
  ipcRenderer.send('render-process-message');
}
</script>
```

Click the `count` button and you will see `hello world` printed in the console from C++.
