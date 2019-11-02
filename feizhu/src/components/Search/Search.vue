<template>
  <div class="clearfix">
    <ul class="search-container">
      <router-link tag="li" class="search-item" to="/air">机票</router-link>
      <router-link tag="li" class="search-item" to="/train">火车票</router-link>
      <router-link tag="li" class="search-item" to="/hotel">酒店客栈</router-link>
      <router-link tag="li" class="search-item" to="/travel">旅游度假</router-link>
      <router-link tag="li" class="search-item" to="/ticket">门票</router-link>
      <router-link tag="li" class="search-item" to="/visa">签证</router-link>
      <router-link tag="li" class="search-item" to="/car">旅行用车</router-link>
    </ul>
    <router-view></router-view>
    <my-swiper class="swiper" />
  </div>
</template>

<script>
import MySwiper from '@/components/Swiper/Swiper.vue'
export default {
  components: {
    MySwiper
  }
}
</script>

<style scoped lang="stylus">
div.clearfix
  padding-top 10px
  overflow hidden
  position relative
  background-color #fff
.search-container
  float left
  width 89px
  height 299px
  background #3d3d3d
  text-align center
  .search-item
    position relative
    display block
    height 42px
    line-height 42px
    font-size 14px
    color #fff
    cursor pointer
    &.router-link-active
      background #fff
      color #6c6c6c
      font-weight 500
.swiper
  position absolute
  right -10px
</style>
