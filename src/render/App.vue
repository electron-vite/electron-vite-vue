<template>
  <div class="app-box">
    <img style="height:200px;" src="./assets/electron.png" alt="Electron logo">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <HelloWorld msg="Electron@11、Vue@3、Vite@2" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.app-box {
  padding-top: 14vh;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 29px;
}
</style>
