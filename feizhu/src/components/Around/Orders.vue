<template>
  <div class="wrapper">
    <div class="order-nav">
      <span>
        <slot></slot>
      </span>
      <ul class="orders">
        <li @click="change($event, true)" data-type="aboard" :class="isSelected ? 'selected' : ''">国际门票</li>
        <li @click="change($event, false)" data-type="china" :class="isSelected ? '' : 'selected'">国内门票</li>
      </ul>
    </div>
    <ul class="order-list">
      <li class="order-item"
        v-for="(order, index) in orders"
        :data-index="order.order"
        :key="index">
        <router-link
          to="/"
          :title="order.name"
        >
          <div
            class="scenic-img"
            :style="{backgroundImage: `url(https://img.alicdn.com/${order.pic_url})`}"
          ></div>
          <div class="scenic-info">
            <div class="name">{{order.name}}</div>
            <div class="pi-price">
              <em>¥</em>{{order.price}}
            </div>
          </div>
          <div class="top top1"
            v-if="order.order < 4">TOP{{order.order}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSelected: true,
      orders: []
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    change (e, bool) {
      this.isSelected = bool
      this.getOrders(e.target.dataset.type)
    },
    getOrders (type = 'aboard') {
      this.$jsonp('/around/scenic/ajax/hotScenic.htm', {
        num: 5,
        format: 'json',
        type: type,
        callback: 'jsonp_1573313049536_12925'
      }).then(json => {
        this.orders = json.data
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.selected
  background-color #ffc900
  font-weight 800
  padding 1px 6px
.wrapper
  color #3d3d3d
  font-size 12px
  width 228px
  &::after
    content ''
    display block
    visibility hidden
    height 0
    clear both
  .order-nav
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAUCAYAAACqJ5zlAAAANElEQVR42u2QwQkAIAzEsp7dXByj7nFewUfdwUcg5Bm0CE2ysA8s2+iSlHR+IN9B3tYWxgFKY9qEmpUQuwAAAABJRU5ErkJggg==') no-repeat
    height 20px
    line-height 20px
    margin 17px 0
    span
      float left
      padding 0 10px 0 15px
    .orders
      float right
      padding-left 16px
      height 20px
      li
        float left
        margin-left 6px
        user-select none
  .order-list
    background-color #fafafa
    .order-item
      padding 6px 0 6px 10px
      color #3d3d3d
      font-size 14px
      &::after
        content ''
        height 0
        display block
        visibility hidden
        clear both
      .scenic-img
        float left
        width 48px
        height 48px
        border-radius 48px
        background-position 50%
      .scenic-info
        float left
        margin-left 20px
        line-height 2
        font-size 14px
        .name
          height 28px
          width 100px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          color #3d3d3d
        .pi-price
          font-size 12px
          font-family pingfang sc,Arial
          line-height 1
          vertical-align baseline
          color #ff5741
          em
            font-style normal
      .top
        float right
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAASCAYAAADypDaEAAAAfklEQVR42u2WwQmAMAxFP3h3BR1DB3GQLuIgDqKoaAfwoCt4F2ICgiPo1wRakt4eP0k/ZEArPYT5QK+KH0KQaLJSQ1jIiMAPsSDVYqeGsNCi5oeYkenDwQtxq9HwQ0wovqBE6e30+GBH5DbYvmL9s/u77bgM4OZW/AUQHTvECWBJRC4tn4JiAAAAAElFTkSuQmCC') no-repeat
        width 49px
        height 18px
        text-align center
        margin-top 21px
        color #3d3d3d
</style>
