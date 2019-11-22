<template>
  <div class="container">
    <div class="item-price">
      <div class="price-items">
        <dl class="price-dl">
          <dt class="price-name">价格</dt>
          <dd class="price-content">
            <del>
              <em>¥</em>
              {{goodsInfo.discount_price}}
            </del>
          </dd>
        </dl>
        <dl class="price-dl">
          <dt class="price-name">促销价</dt>
          <dd class="price-content big-price">
            <em>¥</em>
            <span>{{goodsInfo.price_name}}</span>
            <em class="promotion">促销中</em>
          </dd>
        </dl>
      </div>
      <ul class="info-list" v-if="goodsInfo.good_info">
        <li class="info-item">
          <em class="item-data">{{goodsInfo.good_info.sales}}</em>
          <span class="item-name">月销量</span>
        </li>
        <li class="info-item">
          <em class="item-data">{{goodsInfo.good_info.comment}}</em>
          <span class="item-name">累计评价</span>
        </li>
        <li class="info-item">
          <em class="item-data">
            {{goodsInfo.good_info.ratting}}
            <span class="score">/5.0</span>
          </em>
          <span class="item-name">评分</span>
        </li>
      </ul>
    </div>
    <div class="discount-wrap" style="max-height: 500px;">
      <dl class="item-coupon-wrap">
        <dt class="item-coupon-title">优惠</dt>
        <dd class="item-coupon" v-for="(item, index) in goodsInfo.discount" :key="index">
          <img
            :src="item.img_url"
            class="coupon-img"
          />
          <span>{{item.description}}</span>
          <a class="coupon-get">领取</a>
        </dd>
      </dl>
    </div>
    <div class="mileage-wrap" style="height: 28px;">
      <dl class="item-mileage-wrap clearfix_1">
        <dt class="item-mileage-title">飞猪里程</dt>
        <dd class="item-mileage" v-if="goodsInfo.mileage">
          <img
            :src="goodsInfo.mileage.img_url"
            class="mileage-img"
          />
          <span>{{goodsInfo.mileage.description}}</span>
        </dd>
      </dl>
    </div>
    <ul class="item-desc bottom-border clearfix_1">
      <li class="item-desc-item">
        <div class="item-desc-title">
          <span class="l">目</span>
          <span class="m">的</span>
          <span class="r">地</span>
        </div>
        <div class="item-desc-content">
          <span v-for="(destination, index) in goodsInfo.destination" :key="index">{{destination}}</span>
        </div>
      </li>
      <li class="item-desc-item">
        <div class="item-desc-title">商品特色</div>
        <div class="item-desc-content">
          <span v-for="(item, index) in goodsInfo.special" :key="index">{{item}}</span>        </div>
      </li>
      <li class="item-desc-item">
        <div class="item-desc-title">服务承诺</div>
        <div class="item-desc-content">
          <span class="item-icon">{{goodsInfo.promise}}</span>
        </div>
      </li>
    </ul>
    <div class="property-select">
    <!-- <List :goodsinfo="goodsInfo" /> -->
      <dl class="item-props">
        <dt class="item-prop-key">出发地</dt>
        <dd class="item-prop-val">
          <ul class="clearfix_1"  @click="addHide">
            <li id="itemPropsLi00" class="item-prop" :data-index="index"
              v-for="(item, index) in goodsInfo.departure" :key="index">
              <span class="prop" :class="secondIndex !== null && secondIndex !== index ? 'disabled' : ''">
                <span class="prop-text">{{item}}</span>
              </span>
              <i class="selected-icon hide"></i>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="item-props">
        <dt class="item-prop-key">套餐类型</dt>
        <dd class="item-prop-val">
          <ul class="clearfix_1" @click="addHide1">
            <li id="itemPropsLi00" class="item-prop" :data-index="index"
              v-for="(item, index) in goodsInfo.type" :key="index">
              <span class="prop" :class="firstIndex !== null && firstIndex !== index ? 'disabled' : ''">
                <span class="prop-text">{{item}}</span>
              </span>
              <i class="selected-icon hide"></i>
            </li>
          </ul>
        </dd>
      </dl>
  </div>
  </div>
</template>

<script>
// import List from './List.vue'
export default {
  // components: {
  //   List
  // },
  data () {
    return {
      firstIndex: null,
      secondIndex: null
    }
  },
  props: {
    goodsInfo: {
      type: Object
    }
  },
  methods: {
    addHide (e) {
      const _self = this
      const path = e.path // array
      let li = null
      path.slice(0, -2).forEach((item) => {
        // console.log(item.hasAttribute)
        let className = item.hasAttribute('class') && item.getAttribute('class')
        if (className && className === 'item-prop') {
          li = item
          // console.log(li.hasAttribute('data-index'))
          if (li.hasAttribute('data-index')) {
            _self.firstIndex = Number.parseInt(li.getAttribute('data-index'))
          }
        }
      })
      li && li.parentNode.querySelectorAll('i').forEach(element => {
        element.classList.add('hide')
      })
      li && li.querySelector('i').classList.remove('hide')
    },
    addHide1 (e) {
      const _self = this
      const path = e.path // array
      let li = null
      path.slice(0, -2).forEach((item) => {
        // console.log(item.hasAttribute)
        let className = item.hasAttribute('class') && item.getAttribute('class')
        if (className && className === 'item-prop') {
          li = item
          // console.log(li.hasAttribute('data-index'))
          if (li.hasAttribute('data-index')) {
            _self.secondIndex = Number.parseInt(li.getAttribute('data-index'))
          }
        }
      })
      li && li.parentNode.querySelectorAll('i').forEach(element => {
        element.classList.add('hide')
      })
      li && li.querySelector('i').classList.remove('hide')
    }
  }
}
</script>

<style lang="stylus" scoped>
.clearfix_1
  width 620px
  &::after
    content ''
    display block
    visibility hidden
    height 0
    clear both
.container
  font-size 12px
  &::after
    content ''
    display block
    visibility hidden
    height 0
    clear both
  .item-prop-key
    float: left;
    width: 80px;
    color: #666;
    line-height: 32px;
  .item-prop-val
    margin-left: 80px;
    color: #666;
    min-height: 26px;
    margin-bottom: 10px;
    .item-prop
      float: left;
      position: relative;
      margin: 0 11px 4px 0;
      line-height: 30px;
      height: 33px;
      vertical-align: middle;
      padding: 1px;
      .disabled
        border: 1px dashed #d6d6d8 !important
        color: #cdcdcd !important
        margin: 0 !important
        cursor: not-allowed !important
      .prop
        display: inline-block;
        background-color: #fff;
        white-space: nowrap;
        width: auto;
        min-width: 10px;
        padding: 0 12px;
        text-align: center;
        border: 1px solid #e0e0e0;
        color: #333;
        text-decoration: none;
        cursor: pointer;
      .hide
        display: none !important;
      .selected-icon
        position: absolute;
        bottom: 0;
        right: 1px;
        width: 12px;
        height: 12px;
        display: block;
        background: url(//gtd.alicdn.com/tps/i1/TB1cutFHXXXXXcyXpXXGDvIYFXX-57-350.png) -45px -151px;
  .item-price
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    -moz-align-items: center;
    align-items: center;
    width: 740px;
    box-sizing: border-box;
    padding: 14px 20px;
    min-height: 80px;
    position: relative;
    background: url(https://img.alicdn.com/tfs/TB19ry8SpXXXXaKaFXXXXXXXXXX-640-80.png);
    background-size: cover;
  .price-dl
    line-height: 28px;
    .price-name
      float: left;
      font-size: 12px;
      color: #666;
    .price-content
      margin-left: 80px;
      font-size: 12px;
      em
        margin-right: 5px;
        font-style normal
    .big-price
      font-size: 24px;
      color: #ff5000;
      font-weight: 500;
      em
        font-size 12px
      .promotion
        background-color: #ff5000;
        border-radius: 2px;
        color: #fff;
        height: 14px;
        line-height: 14px;
        font-size: 10px;
        padding: 2px 4px;
        transform: scale(.83);
        -webkit-transform: scale(.83);
        display: inline-block;
  .info-list
    height: 40px;
    position: absolute;
    right: 26px;
    top: 50%;
    margin-top: -20px;
    .info-item
      width: 75px;
      text-align: center;
      display: block;
      float: left;
      .item-data
        color: #ee7500;
        font-size: 18px;
        font-style normal
      .item-name
        display: block;
        color: #a5a5a5;
        font-size: 12px;
        border-right: 1px solid #e0e0e0;
  .score
    font-size: 12px;
    color: #ccc;

.discount-wrap
  height: auto;
  max-height: 0;
  overflow: hidden;
  transition: all 1.5s;
  -moz-transition: all 1.5s;
  -webkit-transition: all 1.5s;
  -o-transition: all 1.5s;
  .item-coupon-wrap
    width: 740px;
    box-sizing: border-box;
    background-color: #f8f8f8;
    padding: 5px 20px;
    font-size: 12px;
    .item-coupon-title
      float: left;
      width: 60px;
      color: #666;
    .item-coupon:not(:last-child)
      margin-bottom: 10px;
    .item-coupon
      width: 620px;
      overflow: hidden;
      height: 18px;
      margin-left: 80px;
      line-height: 18px;
      color: #3d3d3d;
      .coupon-img
        margin-right: 6px;
        position: relative;
        top: 2px;
        height: 12px;
      .coupon-get
        color: #ff0036;
        text-decoration: underline!important;
        margin-left: 6px;
        cursor: pointer;
.mileage-wrap
  height: 0;
  overflow: hidden;
  transition: all .5s;
  -moz-transition: all .5s;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  .item-mileage-wrap
    width: 740px;
    box-sizing: border-box;
    background-color: #f8f8f8;
    padding: 5px 20px;
    font-size: 12px;
    &::after
      content ''
      height 0
      visibility hidden
      clear both
      display block
    .item-mileage-title
      float: left;
      width: 60px;
      color: #666;
    .item-mileage
      margin-left: 80px;
      line-height: 18px;
      height: 18px;
      color: #3d3d3d;
      .mileage-img
        margin-right: 6px;
        position: relative;
        top: 2px;
        height: 12px;
.bottom-border
  border-bottom: 1px dotted #c9c9c9;
  margin-bottom: 20px;
  padding: 16px 0 0 20px;
  width: 720px;
  .item-desc-item
    float: left;
    width: 355px;
    margin-bottom: 12px;
    .item-desc-title
      float: left;
      color: #777;
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      width: 70px;
      overflow: hidden;
      padding-right: 10px;
      span
        display: inline-block;
      .l
        width: 14px;
        text-align: left;
      .m
        width: 20px;
        text-align: center;
      .r
        width: 14px;
        text-align: right;
  .item-desc-content
    font-size: 12px;
    line-height: 18px;
    width: 265px;
    color: #3d3d3d;
    float: left;
    span:not(:last-child)
      margin-right: 10px;
    .item-icon
      background: url('data:image/png;base64,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') no-repeat 0 -230px;
      padding-left: 18px;
.property-select
  width: 740px;
  box-sizing: border-box;
  padding-bottom: 10px;
</style>
<style lang="stylus">
.el-button
  height: 33px;
  border: 1px solid #e0e0e0;
  color: #333;
  padding: 0 12px;
  font-size: 12px;
  border-radius 0
  transition none
  &:hover
    background-color #fff
    border: 2px solid #ff5b45;
    padding 0 11px
    color: #ee5742;
</style>
