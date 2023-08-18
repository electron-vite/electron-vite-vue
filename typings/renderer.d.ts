
export interface IElectronAPI {
  selectPath: () => Promise<string | undefined>,
  readJsonFile: (fileName: string) => Promise<string | undefined>,
  writeJsonFile: (fileName: string, data: string | object) => void,
  loadProject: () => Promise<Record<string, string>>,
}

declare global {
  interface Window {
    api: IElectronAPI
  }
}
