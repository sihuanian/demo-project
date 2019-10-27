<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css"

import { swiper, swiperSlide } from "vue-awesome-swiper"

export default {
  data() {
    return {
      swiperSlides: [
        { imgUrl: 'https://img.alicdn.com/tfs/TB1HLf.khz1gK0jSZSgXXavwpXa-490-300.jpg' },
        { imgUrl: 'https://gw.alicdn.com/tfs/TB1FjqtkhD1gK0jSZFsXXbldVXa-490-300.jpg' },
        { imgUrl: 'https://gw.alicdn.com/tfs/TB1gid4kbr1gK0jSZR0XXbP8XXa-490-300.jpg' },
        { imgUrl: 'https://gw.alicdn.com/tfs/TB1DBEhkmf2gK0jSZFPXXXsopXa-490-300.jpg' },
        { imgUrl: 'https://gw.alicdn.com/tfs/TB1UQzQkbH1gK0jSZFwXXc7aXXa-490-300.jpg' },
        { imgUrl: 'https://gw.alicdn.com/imgextra/i3/O1CN01Q0uGi22Jc1pBslnAN_!!0-travel.jpg' }
      ],
      swiperOption: {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: true,
        loop: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="stylus">
.swiper
  display inline-block
  width 498px
  height 300px
</style>
