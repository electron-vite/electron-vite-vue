<template>
  <a-layout :style="{ width: '100%', height: '100%' }">
    <a-layout-sider v-model:collapsed="collapsed" collapsible theme='light'>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" :items="menuItems" @click="gotoLink">
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="{ minHeight: '100%', minWidth: '100%' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import { menuItems } from '@/router'
import { useRouter } from 'vue-router'

const collapsed = ref(false)
const selectedKeys = ref([])

const router = useRouter()

const gotoLink = ({ key }: { key: string }) => {
  console.log(key)
  if (key) {
    router.push(key)
  }
}


</script>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>

