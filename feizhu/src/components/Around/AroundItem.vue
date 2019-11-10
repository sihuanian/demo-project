<template>
  <router-link
    tag="div"
    to="/"
    class="around-item-container"
    :style="{backgroundImage: `url(${pic})`}"
  >
    <div class="around-item-info">
      <div class="name">{{aroundItem.name}}</div>
      <div class="price">
        <span>￥</span>
        {{Math.trunc(aroundItem.price)}}
        <span>起</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    aroundItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    pic () {
      if (this.aroundItem.pic_url.slice(0, 3) !== 'http') {
        return 'https://img.alicdn.com/' + this.aroundItem.pic_url
      } else {
        return this.aroundItem.pic_url
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.around-item-container
  position relative
  width 228px
  margin 0 6px 6px 0
  height 146px
  background-repeat no-repeat
  background-size auto 100%
  background-position top
  overflow hidden
  .around-item-info
    position absolute
    left 0
    bottom 0
    background-image linear-gradient(-180deg,transparent,rgba(0,0,0,.8))
    border 0 none
    padding-top 12px
    overflow hidden
    .name
      color #fff
      height 18px
      width 204px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      margin-bottom 6px
      font-size 14px
      margin 0 12px 5px
    .price
      padding: 0 12px 12px;
      overflow: hidden;
      font-size: 16px;
      font-family: pingfang sc,Arial;
      line-height: 1;
      vertical-align: baseline;
      color: #ff5741;
      span
        font-size 12px
</style>
