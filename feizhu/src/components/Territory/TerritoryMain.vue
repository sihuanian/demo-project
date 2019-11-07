<template>
  <div class="city-container">
    <div class="recommend-container">
      <MyRecommend v-for="(field, index) in datas" :key="index" :field="field" />
    </div>
    <div class="img">
      <img src="https://img.alicdn.com/tfs/TB1tH5hO4YaK1RjSZFnXXa80pXa-228-525.jpg" title="专线" alt="">
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
    Bus.$on('territoryCity', (params) => {

      this.datas = params
    })
  },
  data () {
    return {
      datas: null
    }
  }
}
</script>

<style scoped lang="stylus">
.recommend-container
  max-width 936px

</style>
