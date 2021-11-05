<template>
  <div class="logo-box">
    <img style="height:200px;" src="./assets/electron.png" alt="Electron logo">
    <span/>
    <img style="height:200px;" alt="Vite logo" src="./assets/vite.svg" />
    <span/>
    <img style="height:200px;" alt="Vue logo" src="./assets/vue.png" />
  </div>
  <HelloWorld msg="Electron@15 + Vite@2 + Vue@3" />
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

.logo-box span {
  width: 74px;
}

</style>
