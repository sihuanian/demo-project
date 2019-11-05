<template>
  <div class="field-container">
    <router-link to="/">
      <div class="destination">
        <span>{{ field.city }}</span>
      </div>
      <div class="field-img">
        <img :src="field.pics" alt />
      </div>
      <div class="field-info">
        <div class="field-desc">
          <img src />
          {{ field.productTitle }}
        </div>
        <div style="padding: 0 12px; box-sizing: border-box; min-height: 23.2px; overflow:hidden;">
          <div class="field-tag" v-for="(item, index) in field.tagList" :key="index" style="display: inline-block;">
            <img v-if="item.icon" :src="item.icon" alt="">
            <span v-else class="tag">{{ item.text }}</span>
          </div>
        </div>
        <div class="field-price">
          <div class="price">
            <em>￥</em>{{ Math.trunc(field.discountPrice) }}<span>起</span>
          </div>
          <div class="sale" v-if="field.seller > 0">30天售出{{ field.seller }}件</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    field: {
      type: Object
    }
  }
}
</script>

<style scoped lang="stylus">
.field-container
  float left
  width 228px
  margin 0 6px 6px 0
  position relative
  transition box-shadow .2s ease-in
  &:hover
    box-shadow 0 2px 1px #e1e1e1
  a
    display block
    color #3d3d3d
    .field-img
      height 150px
      overflow hidden
      background-position 50%
      img
        width 100%
        border 0
    .destination
      position absolute
      background #ffc900
      left 0
      top 0
      font-size 12px
      span
        float left
        padding 2px 6px
        color #3d3d3d
    .field-info
      border 1px solid #f2f3f4
      border-top-width 0
      padding-top 12px
      overflow hidden
      .field-desc
        margin 0 12px 5px
        font-size 14px
        height 40px
        overflow hidden
        img
          height 16px
          position relative
          top 2p
      .field-tag
        overflow hidden
        font-size 12px
        display inline-block
        img
          position relative
          top 3px
          height 16px
          margin-right 2px
        span
          padding 0 2px
          margin 0 2px 0 0
          display inline-block
          height 16px
          border 1px solid rgb(252, 233, 184)
          color rgb(252, 165, 0)
      .field-price
        padding 0 12px 12px
        overflow hidden
        .price
          float left
          height 18px
          font-size 16px
          font-family pingfang sc,Arial
          line-height 1
          vertical-align baseline
          color #ff5741
          em
            font-size 12px
            font-style normal
          span
            color #666
            font-size 12px
        .sale
          float right
          font-size 12px
          color #a5a5a5
</style>
