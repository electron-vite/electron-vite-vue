import { defineStore } from 'pinia';
import { GameDataKey } from '@/common/ggbh-meta';
import JSON5 from 'json5'

export interface ProjectData {
  path: string,
  readonly: boolean,
  json: Partial<Record<GameDataKey, any>>,
  dirty: Partial<Record<GameDataKey, boolean>>,
}

export const useProjectData = defineStore({
  id: "project-data",
  state: (): ProjectData => ({
    path: "",
    readonly: false,
    json: {},
    dirty: {},
  }),
  actions: {
    async init(path: string) {
      const data = await window.api.loadProject();
      for (let key of Object.keys(data)) {
        if (!data[key] || !data[key].trim()) {
          continue
        }
        try {
          this.json[key as GameDataKey] = JSON5.parse(data[key])
        } catch (err) {
          console.error('Error at parsing', key, ":", err)
          console.error('Content:', data[key])
        }
      }
      this.path = path;
    },
    async load(key: GameDataKey) {
      const data = await window.api.readJsonFile(key + ".json")
      if (data) {
        this.json[key] = JSON5.parse(data)
      }

      return this.json[key]
    },
  }
})

