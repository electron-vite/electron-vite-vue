<script lang="ts" setup>
const options = [
  {
    label: '不加代理',
    key: 'notProxy',
  },
  {
    label: '加代理(port: 40000)',
    key: "proxy"
  },
]

const emits = defineEmits(['select'])

const handler = (key: string) => {

  emits('select', key)
}

const config = useAttrs()
</script>


<template>
  <n-dropdown trigger="hover" :options="options" @select="handler">
    <n-button v-bind="config">
      <slot></slot>
    </n-button>
  </n-dropdown>
</template>
