<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="logo-box">
    <img style="height:140px;" src="./assets/electron.png" >
    <span/>
    <img style="height:140px;" src="./assets/vite.svg" >
    <span/>
    <img style="height:140px;" src="./assets/vue.png" >
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="static-public">
    Place static files into the <code>src/renderer/public</code> folder
    <img style="width:90px;" :src="'./images/node.png'" >
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo-box {
  display: flex;
  width: 100%;
  justify-content: center;
}

.logo-box span {
  width: 74px;
}

.static-public {
  display: flex;
  align-items: center;
  justify-content: center;
}

.static-public code {
  background-color: #eee;
  padding: 2px 4px;
  margin: 0 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
