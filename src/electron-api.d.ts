/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IElectronAPI {
	getStoreValue: (key: string) => Promise<any>;
	setStoreValue: (data: setStoreSchema) => void;
}

declare global {
	interface Window {
		electronAPI: IElectronAPI;
	}
}
