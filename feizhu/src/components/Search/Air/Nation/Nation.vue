<template>
  <div class="nation-container">
    <label class="radio" for="J_InputNode_57" @click.prevent="changeStyle(true)">
      <span class="radio-icon" :class="checked ? 'checked' : ''"></span>
      <input
        type="radio"
        name="tripType"
        checked="checked"
        id="J_InputNode_57"
      />单程
    </label>
    <label class="radio" for="J_InputNode_57" @click.prevent="changeStyle(false)">
      <span class="radio-icon" :class="checked ? '' : 'checked'"></span>
      <input
        type="radio"
        name="tripType"
        checked="checked"
        id="J_InputNode_57"
      />往返
    </label>
    <div class="my-order">
      <router-link to="/">我的订单/退票改签</router-link>
    </div>
    <div class="route">
      <div class="route-group">
        <div class="route-title">出发城市：</div>
        <input type="text" placeholder="城市名" v-model="depart">
      </div>
      <div class="route-group">
        <div class="route-title">出发日期：</div>
        <input type="text" placeholder="yyyy-mm-dd">
      </div>
      <div class="route-group">
        <div class="route-title">到达城市</div>
        <input type="text" placeholder="城市名" v-model="destination">
      </div>
      <div class="route-group">
        <div class="route-title">返程日期</div>
        <input type="text" placeholder="yyyy-mm-dd">
      </div>
      <span @click="changeCity" :class="change ? 'switch' : ''"></span>
    </div>
    <div class="search-container">
      <img src="//gw.alicdn.com/tfs/TB1NQ8jQlLoK1RjSZFuXXXn0XXa-184-36.png" alt="">
      <button>搜索</button>
    </div>
    <div class="guarantee">
      <ul>
        <li class="item">
          <i class="iconfont icon-anquanzhongxin"></i>
        </li>
        <li class="item">
          <router-link to="/">价格保障</router-link>
        </li>
        <li class="item-divid"></li>
        <li class="item">
          <router-link to="/">出票保障</router-link>
        </li>
        <li class="item-divid"></li>
        <li class="item">
          <router-link to="/">出行保障</router-link>
        </li>
        <li class="item-divid"></li>
        <li class="item">
          <router-link to="/">信息修改保障</router-link>
        </li>
        <li class="item-divid"></li>
        <li class="item">
          <router-link to="/">改签保障</router-link>
        </li>
        <li class="item-divid"></li>
        <li class="item">
          <router-link to="/">报销保障</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      change: false,
      depart: '南昌',
      destination: '北京'
    }
  },
  methods: {
    changeStyle (bool) {
      this.checked = bool
    },
    changeCity () {
      this.change = !this.change
      let temp = this.depart
      this.depart = this.destination
      this.destination = temp
    }
  }
}
</script>

<style scoped lang="stylus">
.switch
  background url(//gw.alicdn.com/tps/TB1BhzBNFXXXXaCXFXXXXXXXXXX-48-63.png) no-repeat -28px 0 !important
.checked
  background url(//img.alicdn.com/tfs/TB17j81QXXXXXavXVXXXXXXXXXX-20-100.png) no-repeat 0 0 !important
.nation-container
  padding 18px 0 0 25px
  position relative
  max-width 593px
  .radio
    padding-right 15px
    color #4e5662
    cursor pointer
    font-size 12px
    .radio-icon
      background url(//img.alicdn.com/tfs/TB17j81QXXXXXavXVXXXXXXXXXX-20-100.png) no-repeat 0 -50px
      display inline-block
      width 13px
      height 13px
      overflow hidden
      vertical-align -2px
      margin-right 3px
    input
      display none
  .my-order
    position absolute
    left 460px
    top 20px
    font-size 12px
    a
      color #f39b02 !important
  .route
    padding-top 4px
    overflow hidden
    position relative
    span
      position absolute
      left 260px
      top 45px
      width 25px
      height 65px
      background url(//gw.alicdn.com/tps/TB1BhzBNFXXXXaCXFXXXXXXXXXX-48-63.png) no-repeat
      text-indent -20000px
      transition none
    .route-group
      float left
      font-size 12px
      color #6c6c6c
      padding 4px 0
      margin-right 28px
      .route-title
        padding 4px 0
      input
        width 250px
        font-size 14px
        color 14px
        border 1px solid #c7d1e4
        border-radius 3px
        line-height 20px
        height 20px
        padding 4px
        outline 0
        margin 0
        background url(//img.alicdn.com/tps/i1/TB1H3zaFVXXXXXUXpXXPqXt1pXX-1000-500.png) no-repeat
  .search-container
    button
      font-size 16px
      width 160px
      padding 8px 32px
      color #3d3d3d
      background-color #FFC300
      box-shadow 0 2px 0 #EEB600
      display inline-block
      border none
      outline none
      line-height 1
      border-radius 3px
      font-weight 700
      cursor pointer
      vertical-align bottom
      margin 20px 0 2px 198px
  .guarantee
    font-size 12px
    color #a5a5a5
    background-color #f2f3f4
    margin-left -25px
    padding-left 25px
    ul
      overflow hidden
      padding 3px 0 3px 0
      margin-top 14px
    .item
      float left
      padding 1px 5px 0
      &-divid
        margin-top 4px
        float left
        width 1px
        height 10px
        background-color #a5a5a5
      a
        color #a5a5a5
      i
        float left
        font-family homefont
        overflow hidden
        font-size 14px
        font-style normal
        color #f39b02
</style>
