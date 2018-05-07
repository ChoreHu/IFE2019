<template>
    <div>
        <button @click="show = !show">
          TOGGLE
        </button>
        <transition name="fade">
          <span v-if="show">hello</span>
        </transition>
    </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
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
