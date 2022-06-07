import { rmSync } from 'fs';
import { join } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron/renderer';

rmSync('dist', { recursive: true, force: true }); // v14.14.0

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  plugins: [
    vue(),
    env.mode != 'debug' &&
      electron({
        main: {
          entry: 'electron-main/index.ts',
          vite: {
            build: {
              sourcemap: false,
            },
          },
        },
        preload: {
          input: {
            // You can configure multiple preload here
            // name : path e.g.:index:'preload/index.ts'
            // name should match with path in used electron main -> BrowserWindow ->preload
            splash: 'electron-preload/splash.ts',
          },
          vite: {
            build: {
              // For debug
              sourcemap: 'inline',
            },
          },
        },
      }),
    // Enable use Electron, Node.js API in Renderer-process
    renderer(),
  ],
}));
