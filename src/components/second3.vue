<template>
    <div>
        <div id="block" v-bind:style="[isActive ? changeStyle : defaultStyle]" @click="changeColor"></div>
        <div id="block2" :class="[isClass ? changeClass : defaultClass]" @click="changeClazz"></div>
    </div>
</template>
<style>
    .default-class {
        background: red;
        width: 100px;
        height: 100px;
    }
    .change-class {
        background: blue;
        width: 100px;
        height: 100px;
    }
</style>

<script>
// let block = document.getElementById('block')
// block.addEventListener('click', function () {
//   block.style = 'background:blue;width:100px;height:100px;'
// })
export default {
  name: 'second-3',
  data: function () {
    return {
      isActive: false,
      isClass: false,
      defaultClass: 'default-class',
      changeClass: 'change-class',
      defaultStyle: {
        background: 'red',
        width: '100px',
        height: '100px'
      },
      changeStyle: {
        background: 'blue',
        width: '100px',
        height: '100px'
      }
    }
  },
  methods: {
    changeColor () {
      this.isActive = !this.isActive
    },
    changeClazz () {
      this.isClass = !this.isClass
    }
  }
}
</script>
