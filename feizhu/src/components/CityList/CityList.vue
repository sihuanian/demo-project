<template>
  <ul class="city-container">
    <li
      class="city-item"
      v-for="(city, index) in citys"
      :data-city="city"
      :key="index"
      @click="addSelected"
    >{{city}}</li>
  </ul>
</template>

<script>
import bus from '@/bus/bus.js'
import '../../mock/mockServer.js'
export default {
  data () {
    return {
      currentIndex: 0,
      fights: []
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.$nextTick(function () {
      document.querySelector('.city-item').classList.add('selected')
    })
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
        ruleId: 1971 + index,
        cityName: city,
        queryCount: 10,
        _input_charset: 'utf-8',
        callback: 'jsonp_1572621823386_95823'
      }).then(json => {
        // Success.
        this.fights = json.result
        bus.$emit('getFights', this.fights) // 999999999999999
      }).catch(err => {
        // Failed.
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
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
  .city-list
    &::after
      content ''
      height 0
      clear both
      visibility hidden
      display block
</style>
