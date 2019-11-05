<template>
  <div class="wrapper clearfix">
    <div class="header">
      <div class="title">
        <span>特价机票</span>
      </div>
      <div class="ticket">
        <span class="discount" :class="showDiscount ? 'selected' : ''" @click="changeShowDiscount">优惠机票</span>
        <span class="special" :class="showSpecial ? 'selected' : ''" @click="changeShowSpecial">飞猪专线</span>
        <div class="bar" ref="bar" style="transform: translate3d(78px, 0px, 0px);"></div>
      </div>
    </div>
    <div class="show-view">
      <div class="houhui" v-show="showDiscount">
        <my-city :citys="citys" :ruleId="1971"/>
        <my-city :citys="citys2" :ruleId="1987"/>
      </div>
      <div class="feizhu" v-show="showSpecial">
        <my-recommend v-for="(item, index) in views" :key="index" :field="item" />
      </div>
    </div>
  </div>
</template>

<script>
import MyRecommend from '../Recommend/Recommend.vue'
import MyCity from '../Recommend/City'
// import cityList from '../../assets/citys'
import '../../mock/mockServer'
import axios from 'axios'
export default {
  data () {
    return {
      showDiscount: true,
      showSpecial: false,
      citys: ['北京', '上海', '广州', '西安', '成都', '深圳', '昆明', '重庆', '杭州', '武汉', '青岛', '长沙', '哈尔滨', '海口', '天津', '厦门'],
      citys2: ['北京', '上海', '广州', '深圳', '杭州', '中国香港', '成都', '武汉', '昆明', '重庆'],
      // cityList: cityList,
      views: [],
      airplanes: [],
      fights2: []
    }
  },
  props: {
    fights: {
      type: Array
    }
  },
  created () {
    this.getData()
    this.$jsonp('/api/rule/promotion', {
      ruleId: 1987,
      cityName: '北京',
      queryCount: 10,
      _input_charset: 'utf-8',
      callback: 'jsonp_1572847750031_77335'
    }).then(json => {
      // Success.
      this.fights2 = json.result
      // console.log(json.result)
      // console.log(this.fights2)
    }).catch(err => {
      // Failed.
      console.log(err)
    })
  },
  components: {
    MyRecommend,
    MyCity
  },
  methods: {
    changeShowDiscount () {
      this.showDiscount = true
      this.showSpecial = false
      this.$refs.bar.style = 'transform: translate3d(78px, 0, 0);'
    },
    changeShowSpecial () {
      this.showSpecial = true
      this.showDiscount = false
      this.$refs.bar.style = 'transform: translate3d(159px, 0, 0);'
    },
    getData () {
      axios.get('/zhuanxian')
        .then(res => {
          // console.log('zhuanxian', res.data.data)
          this.views = res.data.data
        })
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  background-color #fff
.show-view
  padding 0 10px 6px
.header
  margin-bottom 12px
  background-color #fbfbfb
  overflow hidden
  padding 0 12px 0 18px
  .title
    float left
    font-size 18px
    color #000
    line-height 48px
    font-weight 500
    span
      background url(https://gw.alicdn.com/tfs/TB1oLOePXXXXXbnXFXXXXXXXXXX-36-336.png) no-repeat
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
</style>
