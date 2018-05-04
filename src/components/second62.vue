<template>
    <div class="task-list">
        <div class="task-list-title">任务栏</div>
        <div class="task-menus">
            <task-menu></task-menu>
            <task-menu></task-menu>
            <task-menu></task-menu>
            <task-menu></task-menu>
            <task-menu></task-menu>
            <task-menu></task-menu>
        </div>
    </div>
</template>
<style>
.task-list {
    background-color: #2A2829;
    width: 800px;
    margin: auto;
}
.task-list-title {
    font-size: 30px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: white;
}
.task-menus {
    overflow: hidden;
    text-align: center;
    padding-bottom: 60px;
}
.task-menu {
    margin: 15px;
    width: 180px;
    height: 180px;
    background: pink;
    display: inline-block;
    padding: 20px;
}
.task-menu > .head {
    width: 90px;
    height: 30px;
    color: red;
    background: orange;
    margin: auto;
    line-height: 30px;
    font-size: 14px;
    border-radius: 5px;
}
.task-menu > .content{
    margin-top: 30px;
    text-align: left;
    background: moccasin;
    padding:0 15px;
}
</style>

<script>
import Vue from 'vue'
// 全局配置.所有的对象都能看到该组件
Vue.component('task-menu', {
  template: `<div class="task-menu">
            <div class="head">任务一</div>
            <div class="content">
                <p class="title">标题 : 插槽</p>
                <p class="value">内容 : xxxxxx</p>
                <p class="date">时间 : 2018-01-01</p>
            </div>
        </div>`
})
export default{

}
</script>
