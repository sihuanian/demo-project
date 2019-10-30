<template>
  <div class="menu-list">
    <img :src="drawdownData" alt="" v-if="this.isString()">
    <div :style="`text-align: ${textAlign};`" v-else class="detail" v-for="(item, index) in drawdownData" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'Drawdown',
  props: {
    drawdownData: {
      type: Array | String,
      required: true
    },
    textAlign: {
      type: String,
      default: 'start'
    }
  },
  methods: {
    isString () {
      return typeof this.drawdownData === 'string'
    }
  }
}
</script>

<style scoped lang="stylus">
.menu-list
  min-width 100%
  position absolute
  padding 8px 0
  white-space nowrap
  z-index 30
  top 25px
  left -1px
  border 1px solid #e5e5e5
  border-top none
  display none
  background #FFF
  img
    width 108px
    height 108px
    padding 0 5px
    margin-bottom -5px
  .detail
    padding 0 5px
    color #6c6c6c
    font-size 12px
    line-height 24px
    &:hover
      color #ff6549
</style>
