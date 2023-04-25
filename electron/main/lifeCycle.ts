import { ipcMain, globalShortcut, BrowserWindow } from 'electron';

import Store from 'electron-store';

export const initProgram = () => {
	const store = new Store();

	globalShortcut.register('CommandOrControl+J+K', () => BrowserWindow.getFocusedWindow().webContents.openDevTools({ mode: 'detach' }));

	ipcMain.handle('getStoreValue', (_, key: string) => {
		return store.get(key);
	});

	ipcMain.on('setStoreValue', (_, data: setStoreSchema) => {
		store.set(data.key, data.value);
	});
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const exitProgram = (event, win) => {
	globalShortcut.unregisterAll();
	// event.preventDefault(); 阻止窗口关闭
};