<template>
  <div class="city-container">
    <div class="recommend-container">
      <MyRecommend v-for="(field, index) in datas" :key="index" :field="field" />
    </div>
    <div class="img">
      <img src="https://img.alicdn.com/tfs/TB1.48Ao6TpK1RjSZKPXXa3UpXa-228-525.jpg" title="专线" alt="">
    </div>
  </div>
</template>

<script>
import MyRecommend from '../Recommend/Recommend'
import Bus from '@/bus/bus.js'
export default {
  components: {
    MyRecommend
  },
  created () {
    Bus.$on('foreignCity', (params) => {
      // console.log('params', params)
      this.datas = params
      // this.$set(this.datas, params)
      this.datas = params
      // console.log('dfdfsdfsdfsf', this.datas)
    })
  },
  data () {
    return {
      datas: []
    }
  }
}
</script>

<style scoped lang="stylus">
.recommend-container
  max-width 936px

</style>
