<template>
  <div class="wrapper clearfix">
    <div class="header">
      <div class="title">
        <span>出境游</span>
      </div>
      <div class="ticket">
        <span class="discount"
          v-for="(tab, index) in tabs" :key="index" @click="num = index"
          :class="num === index ? 'selected' : ''">{{tab}}</span>
        <div class="bar" ref="bar" style="transform: translate3d(78px, 0px, 0px);"></div>
      </div>
      <div class="more">更多旅行线路</div>
    </div>
    <div class="show-view">
      <my-foreign-nav :areas="areas" />
      <my-foreign-main />
      <!-- <div class="houhui" v-show="showDiscount">
        <my-city :citys="citys" :ruleId="1971"/>
        <my-city :citys="citys2" :ruleId="1987"/>
      </div>
      <div class="feizhu" v-show="showSpecial">
        <my-recommend v-for="(item, index) in views" :key="index" :field="item" />
      </div> -->
    </div>
  </div>
</template>

<script>
import MyRecommend from '../Recommend/Recommend.vue'
import MyCity from '../Recommend/City'
import MyForeignNav from './ForeignNav'
import MyForeignMain from './ForeignMain'
import '../../mock/mockServer'
import axios from 'axios'
export default {
  name: 'Foreign',
  data () {
    return {
      areas: [],
      num: 0
    }
  },
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  created () {
    // this.getData()
    axios.get('/foreign')
      .then(res => {
        // console.log(res.data.data.words)
        this.areas = res.data.data.words
      })
  },
  components: {
    MyRecommend,
    MyCity,
    MyForeignNav,
    MyForeignMain
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  background-color #fff
.show-view
  padding 0 10px 6px
.header
  background-color #fbfbfb
  overflow hidden
  padding 0 12px 0 18px
  position relative
  .title
    float left
    font-size 18px
    color #000
    line-height 48px
    font-weight 500
    span
      background url(https://gw.alicdn.com/tfs/TB1oLOePXXXXXbnXFXXXXXXXXXX-36-336.png) 0 -22px no-repeat
      padding-left 24px
      background-size 18px auto
      font-size 18px
  .ticket
    float left
    font-size 14px
    color #666
    cursor pointer
    line-height 48px
    padding-left 45px
    position relative
    span
      margin 0 10px 0 0
      padding 0 6px
      &.selected
        color #3d3d3d
        font-weight 500
    .bar
      transition transform 0.2s ease-in-out 0s, width 0.1s ease-out 0s
      transform-origin center center
      width 68px
      position absolute
      left 0
      bottom 0
      height 3px
      &::after
        content ''
        position absolute
        background-color #ffc900
        width 100%
        left -32px
        bottom 0
        height 3px
  .more
    position absolute
    right 20px
    top 16px
    font-weight: 300;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABNUlEQVR42rVWPUvDUBS9ReogLh1cVLpJt4KCFJRYEeog0qFLoVsdXITSLv6C4qZ/IEuhczfp4tJBCjYgOGbt3CmZhMjxHRBBSpL3hPvgQEjuOfflfrz7JGvhQ/YRyB0WMjUI8SYxwWe+4zfaiOvCu+waAd+IJQbIQUJbcuzEA2kaUkSyIyJys8UX0jP4IuE/IJcaqTtPEXd2Qq21mGeGxR3Rn5wwSWnG3fYRhv0KPl83XP/E/y3FrGoJxiVcXZ7gtnOI1cumi5OE2sJazjNePm+h0zpG67qGcLJt7YTawoaxMY5nRfRvqmhcnGLm79iGaUoHoe2OknkBj/cHOPM8jIZlGweh/LQ/XDB52sN53cPDoJJnG6s7UA+RepLVy1S90VSPCvXDTv+41h84+iNTf+irX1u+AQEoBcaSEpouAAAAAElFTkSuQmCC') no-repeat 100%;
    background-size: 12px;
    padding-right: 15px;
    color #3d3d3d
    font-size 12px
</style>
