<script lang="tsx" setup>
import { useLocalStorage } from '@vueuse/core';

const emits = defineEmits(['close'])
const { data } = defineProps<{
  data: any[]
}>()

const show = ref(true)

watch(show, () => {
  if (!show.value) emits('close')
})

const key = useLocalStorage('modal_ident', '')
const keys = computed(() => {
  return data.map((item) => item.ident)
})
const input = ref('')

const list = computed(() => {
  // 未卖
  const unsold = data.filter((item) => {
    return item.sold !== true
  }).sort((a, b) => b.soldTime - a.soldTime)
  // 已卖
  const sold = data.filter((item) => {
    return item.sold === true
  }).sort((a, b) => b.soldTime - a.soldTime)
  const newData = [...unsold, ...sold]

  return newData.filter((item) => {
    return item.instock === true && item.ident === key.value && (input.value ? item.user.startsWith(input.value) : true)
  })
})

// 标记已卖
function handleMarkSold(row) {
  row.sold = true
  row.soldTime = Date.now()
}

const columns = [
  {
    title: '序列',
    render: (row, index) => h('span', undefined, index + 1),
    width: 60
  },
  {
    title: '邮箱',
    key: 'user',
    width: 220,
    ellipsis: true
  },
  {
    title: '状态',
    key: 'info',
    width: 80,
    render: (row) => {
      return <n-space>
        {row.sold === true
          ? <n-tag type="info">已卖</n-tag>
          : <n-tag type="success">未卖</n-tag>
        }
      </n-space>
    }
  },
  {
    title: '结果',
    key: 'result',
    ellipsis: true
  },
  {
    title: '操作',
    width: 100,
    align: 'left',
    fixed: 'right',
    render: (row: any) => {
      return <n-space>
        {row.sold !== true
          ? <n-button text type="primary" onClick={() => handleMarkSold(row)}>标记已卖</n-button>
          : null
        }
      </n-space>
    }
  }
]



</script>

<template>
  <NModal v-model:show="show">
    <n-card class="w-90%! max-w-1000px!" title="库存" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <n-input placeholder="搜索邮箱" v-model:value="input" />
      <n-tabs type="line" animated v-model:value="key">
        <n-tab-pane v-for="(item, index) in keys" :key="index" :name="item" />
      </n-tabs>

      <NDataTable :data="list" :columns="columns" :scroll-x="1000"></NDataTable>
      <template #header-extra>
        <span px-3 class="cursor-pointer" @click="emits('close')">X</span>
      </template>
      <!-- <pre>{{ data }}</pre> -->
    </n-card>
  </NModal>
</template>
