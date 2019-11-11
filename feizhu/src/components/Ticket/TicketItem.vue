<template>
  <div class="city-tickets" :title="fightInfo.arrName + '到' + fightInfo.depName">
    <div class="city-ticket">
      <div class="route">
        {{fightInfo.arrName}}
        <span class="onway"></span>
        {{fightInfo.depName}}
      </div>
      <div class="info">
        <div class="price">
          <em>￥</em>{{fightInfo.price}}<span>起</span>
        </div>
        <div class="time">{{fightInfo.depDate}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fightInfo: {
      type: Object
    }
  }
}
</script>

<style scoped lang="stylus">
.active
.city-tickets
    margin 6px 6px 0 0
    background #fbfbfb
    width 203px
    padding 12px
    height 46px
    overflow hidden
    color #3d3d3d
    transition box-shadow .2s ease-in
    &:hover
      box-shadow 0 2px 2px rgba(0,0,0,.12)
    .route
      font-size 14px
      margin-bottom 6px
      .onway
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAYCAYAAACIhL/AAAAAqUlEQVR42u2ToQ7CMBRFZ0Eg0DMoEhSen0DyKXwAYpI/mGqTNqmhpGbofQbJzNTUxJItJOWKinpCcsU7yUkrT177CkEQhN9RStVa69Zau6IMRNwDkRHnjTIQkzsgcEHgjPue9ZkrGOGLMtB7v0ZclyIvrH/xnAL7EMKGNfKZFubOujA7xE3wg/sxL7+ivCFxSFNs8y16w0jmmI92a4w5MemcKwtBEIT/8gU3x3Cc6NwTPgAAAABJRU5ErkJggg==') no-repeat
        background-size 100%
        display inline-block
        width 20px
        height 15px
        vertical-align middle
        margin 0 6px
    .info
      font-size 16px
      font-family pingfang sc,Arial
      line-height 1
      vertical-align baseline
      color #ff5741
      .price
        float left
        em
          font-size 12px
          font-style normal
        span
          color #ccc
          font-size 12px
      .time
        float right
        color #a5a5a5
        font-size 12px
</style>
