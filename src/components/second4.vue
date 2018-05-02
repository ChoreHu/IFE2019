<template>
    <div>
        <my-component>
            <my-component2>
            </my-component2>
        </my-component>
    </div>
</template>

<script>
export default {
  components: {
    'my-component': {
      template: '<div><my-component2 @resultChange="mychangHandle"></my-component2>我是最高父组件:{{ grandParentValue }}</div>',
      components: {
        'my-component2': {
          template: '<div><my-component3 @resultChange="mychangHandle"></my-component3><p>我是父组件:<span>{{ parentValue }}</span></p></div>',
          components: {
            'my-component3': {
              template: '<div><label>子组件:</label><input type="text" v-model="message"/><input type="button" value="通知父组件" @click="clicks"/></div>',
              methods: {
                clicks: function () {
                  this.$emit('resultChange', this.message)
                  this.$parent.$emit('resultChange', this.message)
                }
              },
              data: function () {
                return {
                  message: ''
                }
              }
            }
          },
          data: function () {
            return {
              parentValue: '我静静等待用户输入'
            }
          },
          methods: {
            mychangHandle (message) {
              this.parentValue = message
            }
          }
        }
      },
      data: function () {
        return {
          grandParentValue: '我也静静等待用户输入'
        }
      },
      methods: {
        mychangHandle (message) {
          this.grandParentValue = message
        }
      }
    }
  }
}
</script>
