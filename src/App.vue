<script setup lang="ts">
import PathSelector from '@/components/path-selector.vue'
import MainView from '@/pages/main-view.vue'
import { useStyleProvider } from 'ant-design-vue';
import { useProjectData } from "@/data/customized-game-data"
import { reactive } from 'vue';

const projectData = useProjectData();

useStyleProvider(reactive({
  hashPriority: "high"
}))

</script>

<template>
  <PathSelector :class="{ 'h-screen': !projectData.path }"></PathSelector>
  <MainView v-if="projectData.path" class="main-view text-blue-500"></MainView>
  <!-- <div> -->
  <!--   <a href="https://www.electronjs.org/" target="_blank"> -->
  <!--     <img src="./assets/electron.svg" class="logo electron" alt="Electron logo" /> -->
  <!--   </a> -->
  <!--   <a href="https://vitejs.dev/" target="_blank"> -->
  <!--     <img src="./assets/vite.svg" class="logo" alt="Vite logo" /> -->
  <!--   </a> -->
  <!--   <a href="https://vuejs.org/" target="_blank"> -->
  <!--     <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
  <!--   </a> -->
  <!-- </div> -->
  <!-- <HelloWorld msg="Electron + Vite + Vue" /> -->
  <!-- <div class="flex-center"> -->
  <!--   Place static files into the <code>/public</code> folder -->
  <!--   <img style="width: 2.4em; margin-left: .4em;" src="/logo.svg" alt="Logo"> -->
  <!-- </div> -->
</template>

<style scoped>
/* .main-view { */
/*   height: calc(100vh - 36px); */
/* } */
</style>
