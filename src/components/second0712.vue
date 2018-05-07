<template>
    <div>
        <button @click="show = !show">
          TOGGLE
        </button>
        <transition name="slide-fade">
          <div v-if="show">hello</div>
        </transition>
    </div>
</template>
<style>
/* 根据动画的名称slide-fade设置不同的状态变化 */
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
export default {
  data: function () {
    return {
      show: true
    }
  }
}
</script>
