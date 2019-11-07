<template>
  <div class="sub-nav">
    <div class="travel-mod-dest">目的地区域：</div>
    <div class="travel-mod-dest">
      <div v-for="(area, index) in areas" :key="index" v-show="num === index">
        <div class="simulate-select" @click="isShow = true">{{areas[index].area}}</div>
        <div class="select-root" v-show="isShow" @click="change">
          <div
            class="area-item"
            :class="num === index ? 'selected' : ''"
            @click="num = index"
            v-for="(area, index) in areas"
            :key="index"
          >{{area.area}}</div>
        </div>
      </div>
    </div>
    <div class="hot-destinations" v-if="areas[num]">
      热门目的地：
      <router-link to="/" v-for="(item, index) in areas[num].country" :key="index">{{item}}</router-link>
    </div>
  </div>
</template>

<script>
import '@/mock/mockServer.js'
import axios from 'axios'
import Bus from '@/bus/bus.js'
export default {
  name: 'TerrityorNav',
  props: {
    areas: {
      type: Array,
      required: true
    },
    url: {
      type: String
    }
  },
  data () {
    return {
      num: 0,
      isShow: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/territoryCity', { params: { id: this.num } })
        .then(res => {
          this.cityItem = res.data.data.result
          Bus.$emit('territoryCity', this.cityItem)
        })
    },
    change () {
      this.isShow = false
      this.getData()
    }
  }
}
</script>

<style scoped lang="stylus">
.selected
  background-color #ffc900
.sub-nav
  padding-left 16px
  margin 17px 0
  height 20px
  font-size 12px
  background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAUCAYAAACqJ5zlAAAANElEQVR42u2QwQkAIAzEsp7dXByj7nFewUfdwUcg5Bm0CE2ysA8s2+iSlHR+IN9B3tYWxgFKY9qEmpUQuwAAAABJRU5ErkJggg==') no-repeat
  .travel-mod-dest
    float left
    position relative
    .simulate-select
      display inline-block
      line-height 20px
      border-radius 3px
      border 0 none
      background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAVklEQVR42k2KsQmAUAxEM4G9jRu4gUvYOoaNW7hF8iGQ5hcprOytrF3Ghyh48ODueGJmu7t38obe81UppYyUMzObiGhV9WIPj0WZYYMDcZJ/MFdYvn0Dhy4m7nrMqrgAAAAASUVORK5CYII=') no-repeat 100%
      padding 0 12px 0 0
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
  .hot-destinations
    float left
    margin-left 36px
    a
      display inline-block
      height 20px
      line-height 20px
      padding 0 6px
      color #e90
</style>
