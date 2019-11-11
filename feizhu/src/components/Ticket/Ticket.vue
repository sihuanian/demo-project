<template>
  <div class="ticket-wrapper clearfix">
    <div class="ticket-header">
      <div class="title">
        <span>机票</span>
      </div>
      <div class="ticket-nav">
        <span class="nation"
          :class="showNation ? 'selected' : ''"
          @click="changeShowNation">国内机票</span>
        <span
          class="foreign"
          :class="showForeign ? 'selected' : ''"
          @click="changeShowForeign"
        >国际/中国港澳台机票</span>
        <div class="bar" ref="bar" style="transform: translate3d(78px, 0px, 0px);"></div>
      </div>
      <div class="more-content"></div>
    </div>
    <div class="ticket-main">
      <div v-show="showNation" class="ticket-nation">
        <div class="selection">
          <TicketSelection :areas="cities" />
          <TicketSelection :areas="type" />
          <TicketSelection :areas="days" />
        </div>
        <div class="tickets">
          <TicketItem class="ticket-item" v-for="(fightInfo, index) in flights" :key="index" :fightInfo="fightInfo" />
        </div>
      </div>
      <div v-show="showForeign" class="ticket-foreign">foreign</div>
    </div>
  </div>
</template>

<script>
import TicketSelection from './TickSection'
import TicketItem from './TicketItem'
export default {
  data () {
    return {
      showNation: true,
      showForeign: false,
      cities: ['北京', '上海', '广州', '深圳', '杭州', '成都', '武汉', '昆明', '重庆'],
      type: ['出发', '到达'],
      days: ['7天内特价', '3天内特价', '14天内特价', '30天内特价', '45天内特价'],
      params: new Map([['city', '北京'], ['type', '出发'], ['time', '7']]),
      flights: []
    }
  },
  components: {
    TicketSelection,
    TicketItem
  },
  created () {
    this.getTicketInfo()
  },
  methods: {
    dateAdd (date, num) {
      let year = date.slice(0, 4) * 1
      let month = date.slice(5, 7) * 1
      let day = date.slice(-2) * 1
      let s = Date.UTC(year, month - 1, day - 1)
      let e = s + num * 24 * 60 * 60 * 1000
      let time = new Date(e)
      let result = time.toLocaleDateString()
      let arr = result.split('/')
      if (arr[1].length === 1) {
        arr[1] = '0' + arr[1]
        result = arr.join('-')
      }
      result = arr.join('-')
      return result
    },
    changeShowNation () {
      this.showNation = true
      this.showForeign = false
      this.$refs.bar.style = 'transform: translate3d(78px, 0, 0);'
    },
    changeShowForeign () {
      this.showNation = false
      this.showForeign = true
      this.$refs.bar.style = 'transform: translate3d(160px, 0, 0); width: 142px;'
    },
    changeParams (key, value) {
      this.params.set(key, value)
    },
    getTicketInfo (options = {
      startDate: new Date().toLocaleDateString().replace(/\//g, '-'),
      endDate: this.dateAdd(new Date().toLocaleDateString().replace(/\//g, '-'), 7),
      routes: 'BJS-',
      ruleId: 4,
      flag: 1,
      callback: 'jsonp_1573459299040_8750'
    }, url = 'https://r.fliggy.com/rule/domestic') {
      // https://r.fliggy.com/rule/domestic
      // startDate: 2019-11-25
      // endDate: 2019-12-02
      // routes: BJS-
      // ruleId: 4
      // flag: 1
      // callback: jsonp_1573459299040_8750
      let map = new Map([['北京', 'BJS'], ['上海', 'SHA'], ['广州', 'CAN'], ['深圳', 'SZX'], ['杭州', 'HGH'], ['成都', 'CTU'], ['武汉', 'WUH'], ['昆明', 'KMG'], ['重庆', 'CKG']])

      let startDate = new Date().toLocaleDateString().replace(/\//g, '-')
      let endDate = this.dateAdd(startDate, this.params.get('time'))
      let routes = map.get(this.params.get('city'))
      if (this.params.get('type') === '出发') {
        routes = '-' + routes
      } else {
        routes += '-'
      }
      this.$jsonp(url, {
        startDate,
        endDate,
        routes,
        ruleId: 4,
        flag: 1,
        callback: 'jsonp_1573459299040_8750'
      }).then(json => {
        this.flights = json.data.flights.slice(0, 15)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.ticket-wrapper
  background-color #fff
  box-sizing border-box
.ticket-header
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
      background url(https://gw.alicdn.com/tfs/TB1oLOePXXXXXbnXFXXXXXXXXXX-36-336.png) 0 -119px no-repeat
      padding-left 24px
      background-size 18px auto
      font-size 18px
  .ticket-nav
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
  .more-content
    color #e90
    background url(https://gw.alicdn.com/tfs/TB1a.8xdoGF3KVjSZFoXXbmpFXa-204-48.png) no-repeat 100%
    padding-right 204px
    height 48px
    float right
    line-height 48px
.ticket-main
  padding 0 12px 6px
  .ticket-nation
    margin 17px 0
    height 20px
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAUCAYAAACqJ5zlAAAANElEQVR42u2QwQkAIAzEsp7dXByj7nFewUfdwUcg5Bm0CE2ysA8s2+iSlHR+IN9B3tYWxgFKY9qEmpUQuwAAAABJRU5ErkJggg==') no-repeat
    .selection
      &::after
        content ''
        display block
        visibility hidden
        height 0
        clear both
    .tickets
      &::after
        content ''
        display block
        visibility hidden
        height 0
        clear both
      .ticket-item
        float left
</style>
