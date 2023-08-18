

export enum EditorEvent {
  WINDOW_MESSAGE = "message",
  SELECT_PATH = "select-path",
  PATH_SELECTED = "path-selected",
}

export interface WindowMessage<T> {
  type: EditorEvent,
  data: T,
}




export enum ApiName {
  selectPath = "dialog:selectPath",
  loadProject = "project:load",
  readJson = "json:read",
  writeJson = "json:write"
}
