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

Vue.use(Router)
Vue.use(ElementUI)

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
    }
  ]
})
