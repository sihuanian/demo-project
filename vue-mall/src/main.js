import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css'
import { LoadingBar } from 'view-design'
Vue.component('LoadingBar', LoadingBar)
import './iview/index'

Vue.config.productionTip = false

// 使用iview 的LoadingBar,实现axios 组件跳转的加载
router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach(() => {
  LoadingBar.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
