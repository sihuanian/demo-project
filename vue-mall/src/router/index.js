import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 首页
    name: 'Index',
    component: Index
  },
  {
    path: '/Login', // 登录
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/SignUp', // 注册
    name: 'SignUp',
    component: () => import('../views/SignUp/SignUp.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/SignUp/CheckPhone.vue')
      },
      {
        path: 'checkPhone',
        name: 'CheckPhone',
        component: () => import('../views/SignUp/CheckPhone.vue')
      },
      {
        path: 'inputInfo',
        name: 'InputInfo',
        component: () => import('../views/SignUp/InputInfo.vue')
      },
      {
        path: 'signUpDone',
        name: 'SignUpDone',
        component: () => import('../views/SignUp/SignUpDone.vue')
      }
    ]
  },
  {
    path: '/goodsList', // 商品列表
    name: 'GoodsList',
    component: () => import('../views/GoodsList/GoodsList.vue')
  },
  {
    path: '/goodsDetail', // 商品详情
    name: 'GoodsDetail',
    component: () => import('../views/GoodsDetail/GoodsDetail.vue')
  },
  {
    path: '/shoppingCart', // 购物车
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart/ShoppingCart.vue')
  },
  {
    path: '/order', // 订单页面
    name: 'Order',
    component: () => import('../views/Order/Order.vue')
  },
  {
    path: '/pay', // 支付页面
    name: 'Pay',
    component: () => import('../views/Pay/Pay.vue')
  },
  {
    path: '/payDone', // 支付成功页面
    name: 'PayDone',
    component: () => import('../views/PayDone/PayDone.vue')
  },
  {
    path: '/freeback', // 反馈页面
    name: 'Freeback',
    component: () => import('../views/Freeback/Freeback.vue')
  },
  {
    path: '/home', // 主页
    name: 'Home',
    component: () => import('../views/GoodsDetail/GoodsDetail.vue'),
    children: [
      {
        path: '/',
        name: 'HomeIndex',
        component: () => import('../views/Home/MyOrder.vue')
      },
      {
        path: 'myAddress',
        name: 'MyAddress',
        component: () => import('../views/Home/MyAddress.vue')
      },
      {
        path: 'addAddress',
        name: 'AddAddress',
        component: () => import('../views/Home/AddAddress.vue')
      },
      {
        path: 'myOrder',
        name: 'MyOrder',
        component: () => import('../views/Home/MyOrder.vue')
      },
      {
        path: 'myShoppingCart',
        name: 'MyShoppingCart',
        component: () => import('../views/GoodsDetail/GoodsDetail.vue')
      }
    ]
  },
  {
    path: '/merchant',
    name: 'Merchant',
    component: () => import('../views/GoodsDetail/GoodsDetail.vue')
  }
]

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
