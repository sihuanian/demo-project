<template>
  <div class="around-container clearfix">
    <div class="header">
      <div class="title">
        <span>周边游 | 门票</span>
      </div>
      <div class="more">更多旅行线路</div>
    </div>
    <div class="around-top">
      <div class="section">
        <CityList :citys="citys" :method="getAround">门票： </CityList>
        <AroundItem
          class="around-item"
          v-for="(item, index) in aroundList"
          :key="index"
          :aroundItem="item"
        />
      </div>
      <div class="orders">
        <Orders>门票榜单：</Orders>
      </div>
    </div>
    <div class="around-citys">
      <CityList :citys="cities" :method="getAroundCities" :url="url">周边游: </CityList>
      <Recommend v-for="(field, index) in fields" :key="index"
        :field="field"
        class="around-city" />
    </div>
  </div>
</template>

<script>
import AroundItem from './AroundItem'
import CityList from './CityList'
import Orders from './Orders'
import Recommend from '@/components/Recommend/Recommend'
import axios from 'axios'
import '@/mock/mockServer'
export default {
  name: 'Around',
  components: {
    CityList,
    AroundItem,
    Orders,
    Recommend
  },
  data () {
    return {
      citys: [],
      cities: [],
      aroundList: [],
      fields: [],
      url: '/aroundCities?id='
    }
  },
  created () {
    this.getCitys()
    this.getCities()
    this.getAround()
    this.getAroundCities()
  },
  methods: {
    getCitys () {
      axios.get('/aroundCityList').then(res => {
        this.citys = res.data.data
      })
    },
    getCities () {
      axios.get('/aroundCitiesList').then(res => {
        this.cities = res.data.data
      })
    },
    getAround (city = '上海') {
      this.$jsonp('/around/scenic/ajax/HotScenicByDest.htm', {
        num: 8,
        format: 'json',
        q: city,
        callback: 'jsonp_1573294995429_89561'
      })
        .then(json => {
          // Success.
          this.aroundList = json.data
        })
        .catch(err => {
          // Failed.
          console.log(err)
        })
    },
    getAroundCities (url = '/aroundCities?id=0') {
      axios.get(url)
        .then(res => {
          // console.log(res.data.data.result)
          this.fields = res.data.data.result
        })
    }
  }
}
</script>

<style scoped lang="stylus">
.around-container
  background #fff
  padding 0 12px 6px
  box-sizing border-box
  &::after
    content ''
    clear both
    visibility hidden
    height 0
    display block
  .around-item
    float left
    width 228px
    margin 0 6px 6px 0
    position relative
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
        background url(https://gw.alicdn.com/tfs/TB1oLOePXXXXXbnXFXXXXXXXXXX-36-336.png) 0 -71px no-repeat
        padding-left 24px
        background-size 18px auto
        font-size 18px
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
  .around-top
    &::after
      content ''
      display block
      visibility hidden
      height 0
      clear both
    .section
      max-width 936px
      float left
      &::after
        content ''
        display block
        visibility hidden
        height 0
        clear both
    .orders
      float left
  .around-citys
    width 100%
    &::after
      content ''
      height 0
      display block
      clear both
      visibility hidden
</style>
