<template>
  <div class="travel-mod-dest">
    <div v-for="(area, index) in areas" :key="index" v-show="num === index">
      <div class="simulate-select" @click="isShow = true">{{areas[index]}}</div>
      <div class="select-root" v-show="isShow" @click="change">
        <div
          class="area-item"
          :class="num === index ? 'selected' : ''"
          @click="getData(index, area)"
          v-for="(area, index) in areas"
          :key="index"
        >{{area}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      isShow: false
    }
  },
  props: {
    areas: {
      type: Array,
      required: true
    }
  },
  methods: {
    change () {
      this.isShow = false
    },
    getData (index, area) {
      this.num = index
      switch (this.areas.length) {
        case 2:
          console.log(area)
          this.$parent.changeParams('type', area)
          this.$parent.getTicketInfo()
          break
        case 5:
          console.log(area.match(/^\d*/g).join(''))
          this.$parent.changeParams('time', area.match(/^\d*/).join(''))
          this.$parent.getTicketInfo()
          break
        case 9:
          console.log(area)
          this.$parent.changeParams('city', area)
          this.$parent.getTicketInfo()
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.selected
  background-color #ffc900
.travel-mod-dest
    float left
    position relative
    border: 1px solid #f2f3f4;
    margin-left 12px
    width 79px
    height 20px
    font-size 12px
    .simulate-select
      display inline-block
      line-height 20px
      border-radius 3px
      width 65px
      border 0 none
      background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAVklEQVR42k2KsQmAUAxEM4G9jRu4gUvYOoaNW7hF8iGQ5hcprOytrF3Ghyh48ODueGJmu7t38obe81UppYyUMzObiGhV9WIPj0WZYYMDcZJ/MFdYvn0Dhy4m7nrMqrgAAAAASUVORK5CYII=') no-repeat 100%
      padding 0 8px 0 5px
      cursor pointer
    .select-root
      position absolute
      z-index 20
      top 20px
      left 0
      outline: none;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      max-height: 250px;
      overflow: auto;
      display: inline-block;
      box-shadow: 0 2px 8px rgba(0,0,0,.15);
      border-radius: 3px;
      background-color: #fff;
      .area-item
        cursor pointer
        display: block;
        padding: 3px 10px;
        line-height: 22px;
        font-weight: 400;
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
</style>
