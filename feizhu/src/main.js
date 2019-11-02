// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueLazyLoad from 'vue-lazyload'
import VueJsonp from 'vue-jsonp' // jsonp
import 'babel-polyfill' // 浏览器兼容
Vue.use(VueJsonp, 5000)

Vue.use(VueLazyLoad)
Vue.config.productionTip = false
// 标签面的文字 => head 中的 title
router.beforeEach((to, from, next) => {
  // console.log(to)
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
