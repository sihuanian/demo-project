<template>
  <div class="hotel-wrapper clearfix">
    <div class="hotel-header">
      <div class="title">
        <span>酒店</span>
      </div>
      <div class="hotel-nav">
        <span
          class="nation"
          :class="showNation ? 'selected' : ''"
          @click="changeShowNation"
        >国内酒店</span>
        <span class="foreign" :class="showForeign ? 'selected' : ''" @click="changeShowForeign">国际酒店</span>
        <span class="appartement" :class="showAppartement ? 'selected' : ''" @click="changeShowAppartement">国际酒店</span>
        <div class="bar" ref="bar" style="transform: translate3d(78px, 0px, 0px);"></div>
      </div>
      <div class="more">更多超值酒店</div>
    </div>
    <div class="hotel-main">
      <div v-show="showNation" class="hotel-nation">
        <CityList :citys="cities" :hint="true" :method="getHotelInfo">入住城市</CityList>
        <div style="float: left; width: 936px;">
          <HotelItem v-for="(hotel, index) in hotelList" :key="index" :hotel="hotel" />
        </div>
        <HotelFilter :hotelFilters="hotelFilters" />
      </div>
      <div v-show="showForeign" class="hotel-foreign">
        <CityList :citys="cities1" :hint="true" :method="getHotelForeign">入住城市</CityList>
        <div style="float: left; width: 936px;">
          <HotelItem v-for="(hotel, index) in hotelForeign" :key="index" :hotel="hotel" />
        </div>
        <!-- <HotelFilter :hotelFilters="hotelFilters" /> -->
      </div>
      <div v-show="showAppartement" class="hotel-appartment">appartment</div>
    </div>
  </div>
</template>

<script>
import CityList from '@/components/Around/CityList'
import HotelItem from '@/components/Hotel/HotelItem'
import HotelFilter from '@/components/Hotel/HotelFilter'
import axios from 'axios'
import '@/mock/mockServer'
export default {
  data () {
    return {
      showNation: true,
      showForeign: false,
      showAppartement: false,
      cities: ['上海', '北京', '广州', '深圳', '厦门', '杭州', '成都', '南京', '苏州'],
      cities1: ['曼谷', '普吉岛', '新加坡', '清迈', '亚庇', '巴厘岛', '吉隆坡', '东京', '芭堤雅'],
      hotelList: [],
      currentIndex: 0,
      hotelFilters: [],
      hotelForeign: []
    }
  },
  components: {
    CityList,
    HotelItem,
    HotelFilter
  },
  created () {
    this.getHotelInfo()
    this.getHotelFilter()
  },
  methods: {
    changeShowNation () {
      this.showNation = true
      this.showForeign = false
      this.showAppartement = false
      this.$refs.bar.style = 'transform: translate3d(78px, 0, 0);'
      // this.getHotelFilter(0)
    },
    changeShowForeign () {
      this.showNation = false
      this.showForeign = true
      this.showAppartement = false
      this.$refs.bar.style = 'transform: translate3d(160px, 0, 0);'
      this.getHotelForeign()
    },
    changeShowAppartement () {
      this.showNation = false
      this.showForeign = false
      this.showAppartement = true
      this.$refs.bar.style = 'transform: translate3d(240px, 0, 0);'
      // this.hotelFilters(2)
    },
    getHotelInfo (index = 0) {
      axios.get('/hotel?id=' + index)
        .then(res => {
          this.hotelList = res.data.data
        })
    },
    getHotelFilter (index = 0) {
      axios.get('/hotelFilter?id=' + index)
        .then(res => {
          console.log(res.data.data)
          this.hotelFilters = res.data.data
        })
    },
    getHotelForeign (index = 0) {
      axios.get('/hotelForeign?id=' + index)
        .then(res => {
          console.log(res.data.data)
          this.hotelForeign = res.data.data
        })
    }
  }
}
</script>

<style scoped lang="stylus">
.hotel-wrapper
  background-color #fff
  box-sizing border-box
.hotel-main
  padding 0 12px 6px
.hotel-header
  margin-bottom 12px
  background-color #fbfbfb
  overflow hidden
  padding 0 12px 0 18px
  position relative
  &::after
    content ''
    display block
    visibility hidden
    height 0
    clear both
  .title
    float left
    font-size 18px
    color #000
    line-height 48px
    font-weight 500
    span
      background url(https://gw.alicdn.com/tfs/TB1oLOePXXXXXbnXFXXXXXXXXXX-36-336.png) no-repeat 0 -95px
      padding-left 24px
      background-size 18px auto
      font-size 18px
  .hotel-nav
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
    font-size 14px
</style>
