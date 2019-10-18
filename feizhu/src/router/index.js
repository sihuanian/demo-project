import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import(`@/views/${file}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: _import_('HelloWorld')
    },
    {
      path: '/login',
      name: 'Login',
      component: _import_('Login/Login')
    },
    {
      path: '/regist',
      name: 'Regist',
      component: _import_('Regist/Regist')
    }
  ]
})
