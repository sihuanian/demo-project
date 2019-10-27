<template>
  <div class="navbar-container">
    <ul class="navbar clearfix">
      <li class="navbar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/hotel">酒店</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/apartment">客栈公寓</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/nation">国内机票</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/internation">中国港澳台/国际机票</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/travel">旅游度假</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/scenic">景点门票</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/train">火车票</router-link>
      </li>
      <li class="navbar-item-divide"></li>
      <li class="navbar-item">
        <router-link to="/destination">目的地</router-link>
      </li>
      <li class="navbar-item-divide"></li>
      <li class="navbar-item">
        <router-link to="/feizhuInternation">飞猪国际</router-link>
      </li>
      <li class="navbar-item-divide"></li>
      <li class="navbar-item">
        <router-link to="myTravel">我的旅行</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
.navbar-container
  background-color #ffc900
.navbar
    height 36px
    position relative
    z-index 9999
    padding-top 6px
    zoom 1
    box-sizing border-box
  .navbar-item
    float left
    height 24px
    line-height 24px
    border-radius 4px
    padding 0 6px
    margin-right 8px
    color #3d3d3d
    a
      color #3d3d3d
    &:hover
      background-color #fff
  .navbar-item-divide
    width 1px
    height 14px
    display block
    background #3d3d3d
    float left
    margin 5px 8px 0 0
</style>
