
import { defineStore } from 'pinia';

export const useEditorContext = defineStore({
  id: "editor-context",
  state: (): EditorContext => ({
    readonly: false,
  })
})

