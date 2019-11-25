<template>
  <div class="container">
    <swiper indicator-dots indicator-color="#006f00" indicator-active-color="#c0397c" autoplay circular>
      <swiper-item>
        <img mode="widthFix" src="/static/images/carousel/01.jpg">
      </swiper-item>
      <swiper-item>
        <img mode="widthFix" src="/static/images/carousel/02.jpg">
      </swiper-item>
      <swiper-item>
        <img mode="widthFix" src="/static/images/carousel/03.jpg">
      </swiper-item>
      <swiper-item>
        <img mode="widthFix" src="/static/images/carousel/04.jpg">
      </swiper-item>
      <swiper-item>
        <img mode="widthFix" src="/static/images/carousel/05.jpg">
      </swiper-item>
    </swiper>
    <div>
      <Temp v-for="(item, index) in listTmp" :key="index" :item="item" :index="index"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Temp from '../template/template'

  export default {
    components: {Temp},

    beforeMount() {
      this.$store.dispatch('getList')
    },

    computed: {
      ...mapState(['listTmp'])
    }
  }
</script>

<style>
  swiper {
    height: 400rpx;
  }

  swiper img {
    width: 100%;
  }
</style>
