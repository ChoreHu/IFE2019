<template>
    <router-view/>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script src="http://cdn.jsdelivr.net/npm/velocity-animate@1.5.0/velocity.min.js"></script>
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
