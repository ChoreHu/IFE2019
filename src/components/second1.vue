
<template>
  <div>
    <input type="text" placeholder="姓名string" v-model="name">
    <input type="text" placeholder="年龄number" v-model="age">
    <input type="text" placeholder="简介string" v-model="des">
    <button @click="clearMsg">移除信息</button>
    <p>姓名 : {{ name }}</p>
    <p>年龄 : {{ age }}</p>
    <p>简介 : {{ des }}</p>
  </div>
</template>

<script>
export default {
  name: 'second-1',
  data () {
    return {
      name: '',
      age: '',
      des: ''
    }
  },
  methods: {
    clearMsg () {
      this.name = ''
      this.age = ''
      this.des = ''
    }
  }
}
</script>
