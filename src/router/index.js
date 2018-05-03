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
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'// 引入中文文件

// 配置中文
Validator.localize(zh)

const config = {
  locale: 'zh_CN',
  fieldsBagName: 'formfields'
}

Vue.use(VeeValidate, config)

// // 自定义validate
// const dictionary = {
//   zh_CN: {
//     messages: {
//       email: () => '请输入正确的邮箱格式',
//       required: (field) => '请输入' + field
//     },
//     attributes: {
//       email: '邮箱',
//       password: '密码',
//       name: '账号',
//       phone: '手机'
//     }
//   }
// }
// console.log(Validator)
// debugger
// Validator.updateDictionary(dictionary)

// Validator.extend('phone', {
//   messages: {
//     zh_CN: field => field + '必须是11位手机号码'
//   },
//   validate: value => {
//     return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//   }
// })
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
    }
  ]
})
