<template>
  <div id="app">
    <!-- 交互行为说明 -->
    <button v-on:click="counter=0">复位计数器</button>
    <button @click="placeChange">改变计数方向</button>
    <button @click="slowDown">降速</button>
    <button @click="destroyMtd">销毁Vue实例</button>
    <button @click="mountMtd">重新挂载Vue实例</button>
    <button>清理日志</button>
    <div class="counter">{{counter}}</div>
    <div id="logs"></div>
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
    },
    destroyMtd () {
      console.log('destroy')
      this.$destroy()
    },
    mountMtd () {
      console.log('mount')
      this.$mount()
    }
  },
  created: function () {
    this.startCount()
  },
  destroy: function () {
    // 连销毁的钩子都不能调用吗?
    console.log('摧毁方法被调用')
  }
}
</script>
