<template>
  <div class="wrapper">
    <span>
      <slot></slot>
    </span>
    <ul class="city-container">
      <li class="city-item selected" @click="addSelected" :data-city="citys[0]">{{citys[0]}}</li><li
        class="city-item"
        v-for="(city, index) in cities"
        :data-city="city"
        :key="index"
        @click="addSelected"
      >{{city}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    citys: {
      type: Array,
      required: true
    },
    method: {
      type: Function
    },
    url: {
      type: String
    }
  },
  computed: {
    cities () {
      const arr = this.citys.slice()
      arr.shift()
      return arr
    }
  },
  methods: {
    addSelected (e) {
      const { city } = e.target.dataset
      const lis = e.currentTarget.parentNode.childNodes
      for (let i = 0; i < lis.length; i++) {
        if (lis[i] !== e.target) {
          lis[i].classList.remove('selected')
        } else {
          this.currentIndex = i
          lis[i].classList.add('selected')
        }
      }
      e.currentTarget.classList.add('selected')
      // this.$parent.getAround(city)
      if (this.method && !this.url) {
        this.method(city)
      } else if (this.method && this.url) {
        this.method(this.url + this.currentIndex)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.pull-left
  float left
.selected
  background-color #ffc900
  font-weight 800
.wrapper
  position relative
  span
    color #3d3d3d
    font-size 12px
    padding 3px 10px 3px 15px
    float left
  .city-container
    padding-left 16px
    margin 17px 0
    height 20px
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAUCAYAAACqJ5zlAAAANElEQVR42u2QwQkAIAzEsp7dXByj7nFewUfdwUcg5Bm0CE2ysA8s2+iSlHR+IN9B3tYWxgFKY9qEmpUQuwAAAABJRU5ErkJggg==') no-repeat
    span
      float left
      color #3d3d3d
      font-size 12px
      padding 3px
    .city-item
      float left
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 6px;
      color: #3d3d3d;
      font-size 12px
  .more
    position absolute
    right 8px
    top 3px
    font-weight: 300;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABNUlEQVR42rVWPUvDUBS9ReogLh1cVLpJt4KCFJRYEeog0qFLoVsdXITSLv6C4qZ/IEuhczfp4tJBCjYgOGbt3CmZhMjxHRBBSpL3hPvgQEjuOfflfrz7JGvhQ/YRyB0WMjUI8SYxwWe+4zfaiOvCu+waAd+IJQbIQUJbcuzEA2kaUkSyIyJys8UX0jP4IuE/IJcaqTtPEXd2Qq21mGeGxR3Rn5wwSWnG3fYRhv0KPl83XP/E/y3FrGoJxiVcXZ7gtnOI1cumi5OE2sJazjNePm+h0zpG67qGcLJt7YTawoaxMY5nRfRvqmhcnGLm79iGaUoHoe2OknkBj/cHOPM8jIZlGweh/LQ/XDB52sN53cPDoJJnG6s7UA+RepLVy1S90VSPCvXDTv+41h84+iNTf+irX1u+AQEoBcaSEpouAAAAAElFTkSuQmCC') no-repeat 100%;
    background-size: 12px;
    padding-right: 15px;
    color #3d3d3d
    font-size 12px
  .city-list
    &::after
      content ''
      height 0
      clear both
      visibility hidden
      display block
</style>
