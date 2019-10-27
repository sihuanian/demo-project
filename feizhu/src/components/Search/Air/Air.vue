<template>
  <div class="air-container">
    <ul class="air">
      <router-link class="air-item" to="/air/nation" tag="li">国内城市</router-link>
      <router-link class="air-item" to="/air/internation" tag="li">国际/中国港澳台</router-link>
      <router-link class="air-item" to="/air/nationdiscount" tag="li">国内特价
        <span class="new" style="background: url(//img.alicdn.com/tps/i1/T1YQs4FeRfXXc1zPrr-9-9.png) no-repeat;width: 9px;height: 9px;right: -2px;top: -6px;"></span>
      </router-link>
      <router-link class="air-item" to="/air/internationdiscount" tag="li">国际/中国港澳台特价</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
.air-container
  overflow hidden
  width 605px
  display inline-block
.air
  position relative
  border-bottom 1px solid #e1e1e1
  height 42px
  padding 14px 0 0 25px
  box-sizing border-box
  width 590px
  .air-item
    float left
    line-height 14px
    color #6c6c6c
    cursor pointer
    padding 0 6px
    margin 0 5px
    position relative
    font-size 14px
    &::after
      background-color transparent
      content ''
      display block
      width 100% - 12px
      height 3px
      position absolute
      top 25px
      left 6px
    &.router-link-active::after
      background-color #ffc300
    span
      display block
      position absolute
</style>
