<template>
  <div class="wrapper">
    <div class="input-container clearfix">
    <div class="logo">
      <a href="javascritp:;">
        <img src="//gw.alicdn.com/bao/tfs/TB1mFZneMmH3KVjSZKzXXb2OXXa-748-467.png" style="margin-top: -13px;" width="121px" height="75px" alt="">
      </a>
    </div>
    <div class="input">
      <div class="input-tab">
        <button class="goods" @click="addSelected" :class="isSelected ? 'selected' : ''">宝贝</button>
        <button class="store" @click="addSelected" :class="isSelected ? '' : 'selected'">店铺</button>
      </div>
      <div class="input-wrapper">
        <input type="text" maxlength="40" :placeholder="isSelected ? '目的地/酒店/景点/签证等' : ''">
      </div>
      <div class="search-btn">
        <button>搜索</button>
      </div>
    </div>
    <div class="phone">
      <span class="icon"></span>
      <span class="txt">客服中心</span>
      <span class="detail">查看</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSelected: true
    }
  },
  methods: {
    addSelected () {
      this.isSelected = !this.isSelected
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  background-color #fff
  margin 0 auto
.input-container
  position relative
  padding-bottom 15px
  .logo
    width 230px
    height 53px
    margin-top 17px
    float left
    a
      width 100%
      height 100%
      display block
  .input
    float left
    position relative
    z-index 1
    margin 38px 0 0 19px
    height 32px
    border 2px solid #ffc900
    border-radius 4px
    .input-tab
      position absolute
      z-index 1
      top -24px
      left 7px
      overflow hidden
      button
        display block
        float left
        margin-left 5px
        height 22px
        line-height 22px
        padding 0 8px
        font-family HiraKakuProN-W2,'Microsoft yahei','Microsoft YaHei'!important
        font-size 12px
        font-weight 700
        color #fca500
        background 0 0
        border-width 0
        border-radius 4px 4px 0 0
        outline 0
        cursor pointer
      .selected
        color #fff
        background-color #fcd71e
        background-image linear-gradient(-135deg,#fcd71e 0,#ff9f02 100%)
    .input-wrapper
      float left
      margin 0 17px
      width 436px
      height 100%
      input
        width 100%
        height 100%
        font-family HiraKakuProN-W2,'Microsoft yahei','Microsoft YaHei'!important
        font-size 14px
        color #333
        background 0 0
        border none
        outline 0
    .search-btn
      position relative
      z-index 1
      float left
      width 90px
      height 100%
      background-color #ffe700
      background-image linear-gradient(90deg,#ffe700 0,#ffc900 100%)
      cursor pointer
      &::before
        content ""
        position absolute
        z-index 1
        left 18px
        top 8px
        width 15px
        height 16px
        background url(//gw.alicdn.com/tfs/TB1D5lplsLJ8KJjy0FnXXcFDpXa-32-34.png) left top no-repeat
        background-size 100% 100%
      button
        position relative
        z-index 2
        display block
        width 100%
        height 100%
        text-indent 20px
        font-size 16px
        color #333
        border none
        background 0 0
        outline 0
        cursor pointer
  .phone
    float left
    font-size 12px
    color #333
    position relative
    margin-top 48px
    margin-left 50px
    .icon
      background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACH0lEQVR42q2Vz0tUURTHj5VFP6zQNtKmTHLnRloEQeBGUERqoRS5ENSoQP8G04XoJooQTFpEBEbQQgJXCTaTiQMWpUTqQglJRMdSUFC7fo6cJ+PDGWe8Xvhy3zv33u/3nV/3STCckywXlQYXkQn3SeLMLXJYw43JGQg/QOyYJ5mj9lzuT+7kKEQDSgjeuM9ykvccsAAG/QWi8tDI20P2J9v2YbnqJxCREYhmXEyyd9m/SPGOsM+AYAWR3iRrMTCrYfQRiIO3ScL3wLyo9AnRdzC051pM8q2anvp40A3WtXL2EO9RASrrjk8VlSqJNlmIvNrC89K3D45A9geice3mBIEXVqZ54jsgexzuXJ7rzVbvL/BNTkP0G/wksafMs2OafESWCd+Vw+joe/bFXYGN8FzmfQl8JdG5vrnIQqDPEnsrIVQ1ajORi6EKrMTeib1Mc5lOLnI4NAZWOXQzwX4b/MW+uO3phJzg/ZkKJ2CGtVbmgtQibLCb9B/PJYEdwUL1wsg2zKt3bkguQdwUrDH/Bx+xVaTKxzUV4cA8z9cDu13l97G/wl6nYQ19XAl4DuLAgbbkItymkM2xaQ2yWslgcPas/ks01PvlpIhNU+Z6B3++4xk07w8wvf/mUTmPwHsTmcSbqnQbFzRncik+AvN2MAIaacoL4X16tSCwyXp/uHTTKmPQYiXr7BYeADdC+2oQPycHHVZNd8FrRH6luq+2AMEgxG/ZCkm4AAAAAElFTkSuQmCC')
      width 12px
      height 12px
      background-size 12px
      position absolute
      left 0
      top 4px
    .txt
      margin-left 20px
    .detail
      margin-left 20px
      cursor pointer
      color #fff
      top 0
      position absolute
      left 60px
      width 54px
      text-align center
      border-radius 4px
      background-color #FFC300
</style>
