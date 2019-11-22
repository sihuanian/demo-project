/* eslint-disable vue/no-parsing-error */
<template>
  <div class="clearfix">
    <my-header />
    <div class="goods-container">
      <div class="goods-left">
        <GoodsImgs :imgs="goodsInfo.imgs" />
        <!-- <Calendar /> -->
        <div class="calendar-container">
          <el-calendar>
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template
            slot="dateCell"
            slot-scope="{date, data}">
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{ (Number.parseInt(data.day.split('-').slice(2).join('')) &lt; 10)
                 ? data.day.split('-').slice(2).join('').slice(1)
                 : data.day.split('-').slice(2).join('')
              }}
            </p>
          </template>
        </el-calendar>
        </div>
      </div>
      <div class="goods-right">
        <GoodsTitle :title="goodsInfo.title" :tags="goodsInfo.title_tag" :subTitle="goodsInfo.subtitle" />
        <GoodsSelection :goodsInfo="goodsInfo"/>
        <GoodsDesc />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/Header/Header'
import GoodsImgs from './GoodsImgs'
import GoodsTitle from './GoodsTitle'
import GoodsDesc from './GoodsDesc'
import GoodsSelection from './Selection'
import axios from 'axios'
import '@/mock/mockServer'
export default {
  data () {
    return {
      goodsInfo: {}
    }
  },
  created () {
    this.getDatas()
  },
  mounted () {
    this.disable()
  },
  components: {
    MyHeader,
    GoodsImgs,
    GoodsSelection,
    GoodsTitle,
    GoodsDesc
  },
  methods: {
    getDatas () {
      axios.get('/goodsDetail').then(res => {
        console.log(res.data.data)
        this.goodsInfo = res.data.data
      })
    },
    disable () {
      this.$nextTick(() => {
        const current = document.querySelectorAll('.current')
        for (let i = 0; i < current.length; i++) {
          if (Array.from(current[i].classList).includes('is-today')) {
            break
          }
          current[i].className += ' disable'
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.is-selected
  background-color #ffc900
  color #000

.goods-container
  width: 1190px;
  border: 1px solid #e5e5e5;
  padding: 20px 15px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  &::after
    content ''
    height 0
    display block
    visibility hidden
    clear both
  .goods-left
    float left
    width 400px
    .calendar-container
      width 400px
      display inline-block
      .el-calendar__body
        padding 0
  .goods-right
    float right
    width 740px
</style>
<style lang="stylus">
.disable
  cursor not-allowed
  color #e0e0e0
  background-color transparent

th
  font-size 10px !important
  color #a5a5a5 !important
tr
  color #666
  font-size 14px
  &:last-child
    display none
  .el-calendar-day
    height 40px !important
    padding: 0 !important
    p
      padding-left 2px
      height 100%
</style>
