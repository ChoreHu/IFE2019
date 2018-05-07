<template>
    <div class="collapse">
        <div class="header">
            <span>expansion panel</span>
            <div class="button" @click="toggle">
                ↑
            </div>
        </div>
        <div class="body" v-if="value  !== ''">
            {{value}}
        </div>
    </div>
</template>
<style>
    .collapse{
        border: 1px solid #e3e3e3;
        width: 400px;
    }
    .header, .body{
        margin: 10px;
    }
    .button{
        width: 25px;
        height: 25px;
        float: right;
        text-align: center;
    }
    .button:hover {
        border-radius: 50%;
        background: gray;
    }
</style>

<script>
export default {
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('mount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    toggle () {
      this.value = '正文'
      console.log('toggle')
    }
  },
  data: function () {
    return {
      value: ''
    }
  }
}
</script>
