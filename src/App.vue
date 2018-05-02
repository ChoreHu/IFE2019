<template>
    <router-view/>
</template>

<script>
import App from './App.vue'

export default {
  name: 'App',
  render: h => h(App)
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
