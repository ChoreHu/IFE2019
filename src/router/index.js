import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import second1 from '@/components/second1'
import test from '@/components/test'
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import second2 from '@/components/second2'
import second3 from '@/components/second3'
import second4 from '@/components/second4'
import second5 from '@/components/second5'
import second6 from '@/components/second6'
import second62 from '@/components/second62'
import second0711 from '@/components/second0711'
import second0712 from '@/components/second0712'
import second0713 from '@/components/second0713'
import second0714 from '@/components/second0714'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'// 引入中文文件

// 配置中文
Validator.localize(zh)

const config = {
  locale: 'zh_CN',
  fieldsBagName: 'formfields'
}

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VeeValidate, config)

export default new Router({
  routes: [
    {
      path: '/second1',
      name: 'second1',
      component: second1
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/second2',
      name: 'second2',
      component: second2
    },
    {
      path: '/second3',
      name: 'second3',
      component: second3
    },
    {
      path: '/second4',
      name: 'second4',
      component: second4
    },
    {
      path: '/second5',
      name: 'second5',
      component: second5
    },
    {
      path: '/second6',
      name: 'second6',
      component: second6
    },
    {
      path: '/second62',
      name: 'second62',
      component: second62
    },
    {
      path: '/second0711',
      name: 'second0711',
      component: second0711
    },
    {
      path: '/second0712',
      name: 'second0712',
      component: second0712
    },
    {
      path: '/second0713',
      name: 'second0713',
      component: second0713
    },
    {
      path: '/second0714',
      name: 'second0714',
      component: second0714
    }
  ]
})
