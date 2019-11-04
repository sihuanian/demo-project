<template>
  <div class="wrapper">
    <ul class="city-container" >
      <li class="city-item selected" @click="addSelected" :data-city="citys[0]">{{citys[0]}}</li><li class="city-item" v-for="(city, index) in cities" :data-city="city" :key="index"
        @click="addSelected">{{city}}</li>
    </ul>
    <router-link class="more" tag="div" to='/'>更多国内特价票</router-link>
    <!-- <MyCityList /> -->
    <div class="city-list">
      <MyCityItem v-for="(item, index) in fights" :fightInfo="item" :key="index"
        class="pull-left" />
    </div>
  </div>
</template>

<script>
import MyCityItem from '../CityItem/CityItem'
// import MyCityList from '../CityList/CityList'
// import bus from '@/bus/bus.js'
export default {
  data () {
    return {
      currentIndex: 0,
      airplanes: [],
      fights: []
    }
  },
  components: {
    MyCityItem
    // MyCityList
  },
  props: {
    citys: {
      type: Array,
      required: true
    },
    ruleId: {
      type: Number,
      required: true
    }
    // fights: {
    //   type: Array
    // }
  },
  computed: {
    cities () {
      const arr = this.citys.slice()
      arr.shift()
      // console.log(arr)
      return arr
    }
  },
  // inject: ['fights'],
  created () {
    this.getData()
    // bus.$on('getFights', (params) => {
    //   console.log('params', params)
    //   this.fights = params
    // })
  },
  mounted () {
    // this.$nextTick(function () {
    //   document.querySelector('.city-item').classList.add('selected')
    // })
  },
  methods: {
    addSelected (e) {
      const { city } = e.target.dataset
      const lis = e.currentTarget.parentNode.childNodes
      for (let i = 0; i < lis.length; i++) {
        if (lis[i] !== e.target) {
          lis[i].classList.remove('selected')
        } else {
          lis[i].classList.add('selected')
          this.currentIndex = i
          console.log(this.currentIndex)
        }
      }
      e.currentTarget.classList.add('selected')
      console.log(city)
      this.getData(city, this.currentIndex)
    },
    getData (city = '北京', index = 0) {
      this.$jsonp('/api/rule/promotion', {
        ruleId: this.ruleId + index,
        cityName: city,
        queryCount: 10,
        _input_charset: 'utf-8',
        callback: 'jsonp_1572621823386_95823'
      }).then(json => {
        // Success.
        this.fights = json.result
      }).catch(err => {
        // Failed.
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.pull-left
  float left
.selected
  background-color #ffc900
  font-weight 800
.wrapper
  position relative
  .city-container
    padding-left 16px
    margin 17px 0
    height 20px
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAUCAYAAACqJ5zlAAAANElEQVR42u2QwQkAIAzEsp7dXByj7nFewUfdwUcg5Bm0CE2ysA8s2+iSlHR+IN9B3tYWxgFKY9qEmpUQuwAAAABJRU5ErkJggg==') no-repeat
    .city-item
      float left
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 6px;
      color: #3d3d3d;
      font-size 12px
  .more
    position absolute
    right 8px
    top 3px
    font-weight: 300;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABNUlEQVR42rVWPUvDUBS9ReogLh1cVLpJt4KCFJRYEeog0qFLoVsdXITSLv6C4qZ/IEuhczfp4tJBCjYgOGbt3CmZhMjxHRBBSpL3hPvgQEjuOfflfrz7JGvhQ/YRyB0WMjUI8SYxwWe+4zfaiOvCu+waAd+IJQbIQUJbcuzEA2kaUkSyIyJys8UX0jP4IuE/IJcaqTtPEXd2Qq21mGeGxR3Rn5wwSWnG3fYRhv0KPl83XP/E/y3FrGoJxiVcXZ7gtnOI1cumi5OE2sJazjNePm+h0zpG67qGcLJt7YTawoaxMY5nRfRvqmhcnGLm79iGaUoHoe2OknkBj/cHOPM8jIZlGweh/LQ/XDB52sN53cPDoJJnG6s7UA+RepLVy1S90VSPCvXDTv+41h84+iNTf+irX1u+AQEoBcaSEpouAAAAAElFTkSuQmCC') no-repeat 100%;
    background-size: 12px;
    padding-right: 15px;
    color #3d3d3d
    font-size 12px
  .city-list
    &::after
      content ''
      height 0
      clear both
      visibility hidden
      display block
</style>
