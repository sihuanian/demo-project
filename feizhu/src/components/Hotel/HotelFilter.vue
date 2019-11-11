<template>
  <div class="hotel-filter">
    <div class="mod" v-for="(item, index) in hotelFilters" :key="index">
      <div class="title">{{item.title}}</div>
      <ul class="list">
        <li v-for="(price, index) in item.price" :key="index">
          <router-link to="/">{{price}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotelFilters: {
      type: Array,
      required: true
    }
  },
  created () {
    // this.getItem()
  },
  computed: {
    getPrice () {
      let prices = []
      for (let i = 0; i < this.hotelFilters.length; i++) {
        prices.push(this.hotelFilters[i].price)
      }
      return prices
    }
  }
}
</script>

<style  scoped lang="stylus">
.hotel-filter
  float right
  width 228px
  font-size 14px
  line-height 2
  background #fafafa
  .mod
    height 157px
    .title
      border-top 6px solid #ffc900
      color #e90
      font-size 16px
      padding-top 6px
      text-indent 12px
    .list
      padding-left 12px
      li
        float left
        width 108px
        height 28px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        a
          color #666
</style>
