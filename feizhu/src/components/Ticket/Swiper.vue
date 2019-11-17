<template>
<div class="swiper-container">
  <div class="prev" @click="prev">
    <span></span>
  </div>
  <div class="main">
    <div class="swiper-item" ref="container" style="transform: translate(-1974px);">
      <div class="item" v-for="(item, index) in imgs" :key="index">
        <router-link to="/">
          <img :src="item" alt="">
        </router-link>
      </div>
      <div class="item" v-for="(item) in imgs" :key="item">
        <router-link to="/">
          <img :src="item" alt="">
        </router-link>
      </div>
    </div>
  </div>
  <div class="next" @click="next">
    <span></span>
  </div>
  <div class="img">
    <img src="https://img.alicdn.com/tps/TB1dZecPXXXXXXYaXXXXXXXXXXX-228-78.png_230x87.jpg" alt="">
    <img src="https://img.alicdn.com/tps/TB1FruTPXXXXXXeXXXXXXXXXXXX-228-78.png_230x87.jpg" alt="">
  </div>
</div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: function () {
        return [
          '//img.alicdn.com/tps/TB1wsXSPXXXXXcTapXXXXXXXXXX-56-56.jpg',
          'https://img.alicdn.com/tps/TB1UNDbPpXXXXcnXXXXXXXXXXXX-56-56.png',
          '//img.alicdn.com/tps/i4/TB1g4NQGXXXXXbjXFXXBRexYXXX-56-56.jpeg',
          'https://img.alicdn.com/tfs/TB1cJCkQpXXXXXYXVXXXXXXXXXX-56-56.jpg',
          'https://img.alicdn.com/tfs/TB11XR2RXXXXXbYXXXXXXXXXXXX-56-56.jpg',
          'https://img.alicdn.com/tfs/TB1kZ50SXXXXXXIXXXXXXXXXXXX-56-56.jpg',
          'https://img.alicdn.com/tfs/TB1sKzjd8TH8KJjy0FiXXcRsXXa-50-50.jpg',
          'https://gw.alicdn.com/tfs/TB1P5mNzAOWBuNjSsppXXXPgpXa-56-56.jpg',
          'https://gw.alicdn.com/tfs/TB1Dj1lq3MPMeJjy1XbXXcwxVXa-156-156.jpg',
          'https://gw.alicdn.com/tfs/TB1rQalq3MPMeJjy1XbXXcwxVXa-200-200.jpg',
          'https://gw.alicdn.com/tfs/TB1M_U9qMMPMeJjy1XdXXasrXXa-315-315.jpg',
          '//img.alicdn.com/tps/TB1t51wPXXXXXbCXFXXXXXXXXXX-56-56.jpg',
          '//img.alicdn.com/tps/i1/TB1qWxZGXXXXXa4XXXXBRexYXXX-56-56.jpeg',
          '//img.alicdn.com/tps/TB10uKmPXXXXXcsXpXXXXXXXXXX-56-56.jpg'
        ]
      }
    }
  },
  methods: {
    prev () {
      this.$nextTick(() => {
        const swiper = this.$refs.container
        const translate = swiper.style.transform.match(/-?\d*/g).join('') * 1
        if (translate === -658) {
          swiper.style.transition = 'all linear .8s'
          swiper.style.transform = `translate(${-1974}px)`
        } else if (translate >= -1974) {
          swiper.style.transition = 'all linear .8s'
          swiper.style.transform = `translate(${translate + 94 * 7}px)`
        }
      })
    },
    next () {
      this.$nextTick(() => {
        const swiper = this.$refs.container
        const translate = swiper.style.transform.match(/-?\d*/g).join('') * 1
        if (translate > -1974) {
          console.log(`translate: (${translate + 649}px)`)
          swiper.style.transition = 'all linear .8s'
          swiper.style.transform = `translate(${translate - 94 * 7}px)`
        } else if (translate === -1974) {
          swiper.style.transition = 'all linear .8s'
          swiper.style.transform = `translate(${-1316}px)`
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.swiper-container
  font-size 0
  &::after
    content ''
    height 0
    display block
    visibility hidden
    clear both
  .img
    border 1px solid #d6d6d6
    &:first-child
      margin 0 5px
  .prev,.main,.next,.img
    display inline-block
  .prev,.next
    border 1px solid #d6d6d6
    width 26px
    height 78px
    position relative
  .prev span,
  .next span
    position absolute
    left 50%
    top 50%
    display inline-block
    width 0
    height 0
    border-width 5px
    border-style solid
    transform translate(-50%, -50%)
  .prev span
    border-color transparent #d6d6d6 transparent transparent
  .next span
    border-color transparent transparent transparent #d6d6d6
  .main
    width 649px
    height 78px
    border-top 1px solid #d6d6d6
    border-bottom 1px solid #d6d6d6
    overflow hidden
    .swiper-item
      width 3813px
      &::after
        content ''
        display block
        visibility hidden
        height 0
        clear both
      .item
        outline none
        width 93px
        height 78px
        line-height: 78px;
        text-align: center;
        float: left;
        border-right: 1px solid #f2f3f4;
        img
          vertical-align: middle;
          width: 56px;
          border-radius: 56px;
</style>
