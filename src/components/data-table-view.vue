<template>
  <a-table :columns="columns" :dataSource="dataSource" size="small"></a-table>
</template>

<script lang="ts" setup>
import '@surely-vue/table/dist/index.less';
import { GameDataKey, gameMetaInfo } from '@/common/ggbh-meta';
import { computed } from 'vue';
// import TownGril from '@/assets/original-game-data/TownGril.json'
// console.log(TownGril)

const props = defineProps<{
  configKey: GameDataKey,
  dataSource: ArrayLike<any>,
}>()

const fields = gameMetaInfo[props.configKey].fields;


const columns = computed(() => {
  return fields.map(field => ({
    title: field.label,
    dataIndex: field.code,
    key: field.code
  }))
})

</script>
