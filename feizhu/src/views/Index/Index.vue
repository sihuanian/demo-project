<template>
  <div>
    <my-header />
    <my-input />
    <my-navBar />
    <my-search />
    <my-route :fights="airplanes" />
    <my-foreign :tabs="['出境游路线']" />
    <my-territory :tabs="['自由行', '跟团游']" />
  </div>
</template>

<script>
import MyHeader from '@/components/Header/Header.vue'
import MyInput from '@/components/Input/Input.vue'
import MyNavBar from '@/components/NavBar/NavBar.vue'
import MySearch from '@/components/Search/Search.vue'
import MyRoute from '@/components/AirRoute/AirRoute.vue'
import MyForeign from '@/components/Foreign/Foreign.vue'
import MyTerritory from '@/components/Territory/Territory'
// import axios from '@/api/fetch.js'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyInput,
    MyNavBar,
    MySearch,
    MyRoute,
    MyForeign,
    MyTerritory
  },
  data () {
    return {
      airplanes: null
    }
  },
  created () {
    this.$jsonp('/api/rule/promotion', {
      ruleId: 1971,
      cityName: '北京',
      queryCount: 10,
      _input_charset: 'utf-8',
      callback: 'jsonp_1572621823386_95823'
    }).then(json => {
      // Success.
      this.airplanes = json.result
    }).catch(err => {
      // Failed.
      console.log(err)
    })
  },
  beforeMount () {
  },
  provide () {
    return {
      fights: this.airplanes
    }
  },
  methods: {
    // /api/rule/promotion?ruleId=1971&cityName=北京&queryCount=10&_input_charset=utf-8&callback=jsonp_1572621823386_95823
    getFights () {
      /* axios
        .get('/api/rule/promotion?ruleId=1971&cityName=%E5%8C%97%E4%BA%AC&queryCount=10&_input_charset=utf-8&callback=jsonp_1572686264440_47211')
        .then(res => {
          console.log(res)
        }) */
      this.$jsonp('/api/rule/promotion', {
        ruleId: 1971,
        cityName: '北京',
        queryCount: 10,
        _input_charset: 'utf-8',
        callback: 'jsonp_1572621823386_95823'
      }).then(json => {
        // Success.
        this.airplanes = json.result
      }).catch(err => {
        // Failed.
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus"></style>
