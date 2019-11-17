<template>
  <div class="recommend-wrapper clearfix">
    <div class="title"><h2>猜你喜欢</h2></div>
    <div class="recomment-container">
      <Recommend v-for="(field, index) in fields" :key="index" :field="field" />
    </div>
  </div>
</template>

<script>
import Recommend from './Recommend'
import axios from 'axios'
import '../../mock/mockServer'
export default {
  components: {
    Recommend
  },
  data () {
    return {
      fields: []
    }
  },
  created () {
    axios.get('/recommend')
      .then(res => {
        console.log(res.data.data)
        this.fields = res.data.data
      })
  }
}
</script>

<style scoped lang="stylus">
.recommend-wrapper
  background-color #fff
  .title
    text-align center
    line-height: 48px;
    background: #fbfbfb;
    h2
      font-size: 18px;
      line-height 23px
      color: #000;
      font-weight: 500;
      display inline-block
      background: url(https://gw.alicdn.com/tfs/TB1oLOePXXXXXbnXFXXXXXXXXXX-36-336.png) 0 -143px no-repeat;
      background-size: 18px auto;
      padding-left 24px
  .recomment-container
    padding 0 12px 6px 13px
    box-sizing border-box
    &::after
      content ''
      display block
      height 0
      clear both
      visibility hidden
</style>
