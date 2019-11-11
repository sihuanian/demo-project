<template>
  <div class="item-wrap">
    <router-link
      to="/"
      :title="hotel.title"
    >
      <div class="item-img">
        <img
          :src="hotel.img_url"
          :alt="hotel.title"
        />
      </div>
      <div class="item-info">
        <div class="item-title">{{hotel.title}}</div>
        <div class="item-level">{{hotel.level}}</div>
        <div class="item-price">
          <div class="pi-price">
            <em>¥</em>{{hotel.price}}
            <span class="qi">起</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
.item-wrap
  float left
  width 228px
  margin 0 6px 6px 0
  position relative
  background-color #fff
  a
    transition box-shadow .2s ease-in
    display block
    color #3d3d3d
    .item-img
      height 150px
      overflow hidden
      background-position 50%
      img
        width 100%
    .item-info
      border 1px solid #f2f3f4
      border-top-width 0
      padding-top 12px
      overflow hidden
      .item-title
        height 19px
        margin 0 12px 3px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        font-size 14px
      .item-level
        color #a5a5a5
        margin 0 0 6px 12px
        font-size 12px
      .item-price
        padding 0 12px 12px
        overflow hidden
        .pi-price
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
          .qi
            font-size 12px
            color #666
</style>
