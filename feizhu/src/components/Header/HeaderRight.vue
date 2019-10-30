<template>
  <div class="container">
    <ul class="nav">
      <li class="menu">
        <div class="menu-item">
          <span class="title">手机客户端</span>
          <span class="arrow"></span>
        </div>
        <Drawdown :drawdownData="drawdownData.imgUrl" />
      </li>
      <li class="menu">
        <div class="menu-item">
          <span class="title">我的淘宝</span>
          <span class="arrow"></span>
        </div>
        <Drawdown :drawdownData="drawdownData.first" />
      </li>
      <li class="menu">
        <div class="menu-item">
          <span class="title">购物车</span>
          <span class="arrow"></span>
        </div>
        <!-- <Drawdown :drawdownData="" /> -->
      </li>
      <li class="menu">
        <div class="menu-item">
          <span class="title">收藏夹</span>
          <span class="arrow"></span>
        </div>
        <Drawdown :drawdownData="drawdownData.second" />
      </li>
      <li class="pipe"></li>
      <li class="menu none">
        <div class="menu-item">
          <span class="title">服务中心</span>
        </div>
      </li>
      <li class="menu">
        <div class="menu-item">
          <span class="title">商家中心</span>
          <span class="arrow"></span>
        </div>
        <Drawdown :drawdownData="drawdownData.third" :textAlign="'center'" />
      </li>
      <li class="menu none">
        <div class="menu-item">
          <span class="title">淘宝</span>
        </div>
      </li>
      <li class="menu">
        <div class="menu-item">
          <span class="title">网站导航</span>
          <span class="arrow"></span>
        </div>
        <!-- <Drawdown :drawdownData="" /> -->
      </li>
    </ul>
  </div>
</template>

<script>
import Drawdown from './Drowdown'
export default {
  components: {
    Drawdown
  },
  data () {
    return {
      drawdownData: {
        first: ['已买到的宝贝', '我的足迹', '飞猪旅行达人'],
        second: ['收藏的店铺', '收藏的宝贝'],
        third: ['招商入驻', '商家规则', '培训中心', '商家品控', '活动中心', '商家服务', '里程发票'],
        imgUrl: 'https://img.alicdn.com/tps/TB1FBffPXXXXXcFXXXXXXXXXXXX-94-94.png'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.container
  height 25px
  .nav
    float right
    .pipe
      width 1px
      height 10px
      background-color #6c6c6c
      margin-top 7px
      font-size 12px
      margin 7px 5px 0 5px
      color #ddd
      float left
    .menu
      float left
      position relative
      border-left 1px solid #f2f3f4
      border-right 1px solid #f2f3f4
      &:hover
        background-color #fff
        border-left 1px solid #e5e5e5
        border-right 1px solid #e5e5e5
      &:hover .arrow
        transform rotate(135deg)
      &:hover .menu-list
        display block
      &.none:hover
        color #f39b03
        background-color #f2f3f4
        border-left 1px solid #f2f3f4
        border-right 1px solid #f2f3f4
      .title
        display inline-block
        &:hover
          color #f39b03
      .arrow
        display inline-block
        width 4px
        height 4px
        border-left 1px solid #6c6c6c
        border-bottom 1px solid #6c6c6c
        transform translateY(-3px) rotate(-45deg)
        transition ease-in .3s
      .menu-item
        padding 0 6px
        height 25px
        line-height 25px
        font-size 12px
        color #6c6c6c
</style>
