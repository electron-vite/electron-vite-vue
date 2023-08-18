<template>
  <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
    <a-menu-item key="1">
      <user-outlined />
      <span>nav 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <video-camera-outlined />
      <span>nav 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <upload-outlined />
      <span>nav 3</span>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>

defineProps<{
  selectedKeys: string[],
}>()

</script>
