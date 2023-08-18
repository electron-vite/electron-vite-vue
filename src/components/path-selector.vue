<template>
  <div v-if="projectData.path" class="flex flex-row w-full text-sm text-left place-items-center ">
    <div class="flex flex-row w-full h-full border border-transparent border-solid place-items-center border-b-gray-200">
      <!-- context menu  -->
      <a-dropdown :trigger="['hover']">
        <span title="Context menu"
          class="flex flex-row place-items-center p-0.5 hover:rounded hover:border-gray-300 border-solid border  border-transparent hover:shadow-sm">
          <SettingTwoTone class="text-blue-600"></SettingTwoTone>
        </span>
        <template #overlay>
          <a-menu class="text-sm" :items="contextMenuItems" @click="menuItemClicked">
          </a-menu>
        </template>
      </a-dropdown>
      <!-- Project path (static) -->
      <span class="px-1 text-gray-500 min-w-fit">Project Path:</span>
      <!-- readonly (icons)-->
      <div
        class="flex flex-row cursor-pointer p-0.5 hover:rounded hover:border-gray-300 border-solid border  border-transparent hover:shadow-sm"
        @click="toggleReadonly">
        <LockTwoTone two-tone-color="#eb2f96" v-if="projectData.readonly" />
        <UnlockTwoTone two-tone-color="#52c41a" v-else />
      </div>
      <!-- path -->
      <span class="px-1 text-gray-500 whitespace-nowrap overflow-ellipsis" :title="projectData.path">{{
        projectData.path }}</span>
    </div>
  </div>
  <div v-else>
    <!-- select path -->
    <div class="flex flex-col justify-center h-full place-items-center">
      <p>Project path is not specified, please select a MOD path.</p>
      <a-button type="primary" @click="onSelectPath">Select ...</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, computed } from 'vue';
import { ItemType } from 'ant-design-vue';
import { useProjectData } from '@/data/customized-game-data';
import { FolderOpenOutlined, LockTwoTone, UnlockTwoTone, SettingTwoTone, ReloadOutlined, SaveOutlined, FolderViewOutlined } from '@ant-design/icons-vue'

const projectData = useProjectData()

let disabled = false
const onSelectPath = async () => {
  if (!disabled) {
    disabled = true

    const path = await window.api.selectPath()
    if (path && path != projectData.path) {
      await projectData.init(path)
      console.log(projectData.path)
    }
    disabled = false
  }
}

interface MenuItemClickedParam {
  item: {
    action?: () => void
  }
}

const menuItemClicked = ({ item }: MenuItemClickedParam) => {
  if (item.action) {
    item.action()
  }
}

const toggleReadonly = () => projectData.readonly = !projectData.readonly

const openInSysApp = async () => {
  const data = await window.api.readJsonFile('ArtifactShape.json')
  console.log(JSON.parse(data || ''))
}

const reload = () => {
  window.alert("reload project")
}

const save = () => {
  window.alert("save project")
}

const contextMenuItems = computed<ItemType[]>(() => {
  return [
    {
      key: '0',
      icon: h(FolderOpenOutlined),
      label: "Open project...",
      action: onSelectPath
    },
    {
      id: '4',
      icon: h(SaveOutlined),
      label: "Save",
      disabled: projectData.readonly,
      action: save
    },
    {
      id: '3',
      icon: h(ReloadOutlined),
      label: "Reload",
      action: reload
    },
    {
      type: 'divider'
    },
    {
      id: '2',
      icon: h(FolderViewOutlined),
      label: "Open folder by system App.",
      action: openInSysApp
    },
  ] as ItemType[]
})

// const pathSelected = (evt: MessageEvent<any>): void => {
//   if (evt.data.type == EditorEvent.PATH_SELECTED) {
//     if (evt.data.data?.length) {
//       editorContext.path = evt.data.data[0]
//     }
//   }
// };
// onMounted(() => {
//   window.addEventListener(EditorEvent.WINDOW_MESSAGE, pathSelected)
// })
//
// onUnmounted(() => {
//   window.removeEventListener(EditorEvent.WINDOW_MESSAGE, pathSelected)
// })
</script>
