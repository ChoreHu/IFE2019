
<template>
  <div id="app">
    <!-- 交互行为说明 -->
    <button v-on:click="counter=0">复位计数器</button>
    <button @click="placeChange">改变计数方向</button>
    <button @click="slowDown">降速</button>
    <div class="counter">{{counter}}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0,
      place: 1,
      speed: 100,
      intv: ''
    }
  },
  methods: {
    startCount () {
      if (this.intv !== '') {
        clearInterval(this.intv)
      }
      this.intv = setInterval(() => {
        this.counter += this.place
      }, this.speed)
    },
    placeChange () {
      this.place = (this.place === 1) ? -1 : 1
    },
    slowDown () {
      this.speed *= 2
      this.startCount()
    }
  },
  created: function () {
    this.startCount()
  }
}
</script>
