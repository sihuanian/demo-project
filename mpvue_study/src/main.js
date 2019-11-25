import Vue from 'vue'
import App from './app'
import store from './store/store'

// 设置vue的提示功能关闭
Vue.config.productionTip = false

// 声明当前组件类型
App.mpType = 'app' // 应用

// 生成应用的实例
const app = new Vue(App)

// 将store对象放到Vue的原型上，每个组件都可以使用
Vue.prototype.$store = store

// 挂载整个应用
app.$mount()
