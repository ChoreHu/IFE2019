
<template>
  <div id="app">
    <!-- 交互行为说明 -->
    <button v-on:click="counter=0">复位计数器</button><button @click="placeChange">改变计数方向</button>
    <div class="counter">{{counter}}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    console.log(this)
    return { counter: 0, place: 1 }
  },
  methods: {
    placeChange () {
      this.place = (this.place === 1) ? -1 : 1
    }
  },
  created: function () {
    setInterval(() => {
      this.counter += this.place
    }, 100)
  }
}
</script>
