import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import(`@/views/${file}.vue`)
const _importC_ = file => () => import(`@/components/${file}.vue`)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: _import_('Index/Index'),
      meta: {
        title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
      },
      redirect: '/air/nation',
      children: [
        {
          path: 'air',
          component: _importC_('Search/Air/Air'),
          meta: {
            title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
          },
          children: [
            {
              path: 'nation',
              component: _importC_('Search/Air/Nation/Nation'),
              meta: {
                title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
              }
            },
            {
              path: 'internation',
              component: _importC_('Search/Air/Internation/Internation'),
              meta: {
                title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
              }
            },
            {
              path: 'nationdiscount',
              component: _importC_('Search/Air/NationDiscount/NationDiscount'),
              meta: {
                title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
              }
            },
            {
              path: 'internationdiscount',
              component: _importC_('Search/Air/InternationDiscount/InternationDiscount'),
              meta: {
                title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
              }
            }
          ]
        },
        {
          path: 'train',
          component: _importC_('Search/Train/Train'),
          meta: {
            title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
          }
        },
        {
          path: 'hotel',
          component: _importC_('Search/Hotel/Hotel'),
          meta: {
            title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
          }
        },
        {
          path: 'travel',
          component: _importC_('Search/Travel/Travel'),
          meta: {
            title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
          }
        },
        {
          path: 'ticket',
          component: _importC_('Search/Ticket/Ticket'),
          meta: {
            title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
          }
        },
        {
          path: 'visa',
          component: _importC_('Search/Visa/Visa'),
          meta: {
            title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
          }
        },
        {
          path: 'car',
          component: _importC_('Search/Car/Car'),
          meta: {
            title: '飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】'
          }
        }
      ]
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
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: _import_('GoodsDetail/GoodsDetail'),
      meta: {
        title: '春节预定越南芽庄旅游6天5晚自由行可升级酒店+赠专车接送机 亲子'
      }
    }
  ]
})
