<template>
  <div class="logo-box">
    <img style="height:200px;" src="./assets/electron.png" alt="Electron logo">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <HelloWorld msg="Hello Electron 9.0 + Vue 3.0  Vite" />
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
.logo-box {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
