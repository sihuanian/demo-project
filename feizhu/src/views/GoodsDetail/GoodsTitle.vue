<template>
  <div class="right-container">
    <div class="item-title">
      <h1 class="title-txt">
        <span>{{title}}</span>
        <span class="title-tag" style="background-color: rgb(255, 201, 0);"
          v-for="(tag, index) in tags" :key="index">{{tag}}</span>
      </h1>
    </div>
    <div class="item-subtitle-wrap">
      <ul class="item-subtitle-content">
        <li class="item-subtitle"
          v-for="(sub, index) in subTitle" :key="index">{{sub}}</li>
      </ul>
      <div class="left-arrow"></div>
    </div>
    <div class="report-wrap">
      <a
        class="report-content"
        target="_blank"
        href="//jubao.taobao.com/index.htm?itemId=568923073402"
      >举报</a>
    </div>
    <div
      class="item-streamer"
      style="background-image: url(&quot;//img.alicdn.com/tfs/TB1BUtdSXXXXXbpXFXXXXXXXXXX-740-40.png&quot;);"
    ></div>
  </div>
</template>

<script>
import Section from './Selection'
export default {
  components: {
    Section
  },
  props: {
    title: {
      // type: String,
      required: true
    },
    tags: {
      type: Array
    },
    subTitle: {
      type: Array
    }
  }
}
</script>

<style scoped lang="stylus">
.item-title
  margin-bottom: 10px;
  width: 740px;
  display inline-block
  .title-txt
    font-size: 18px;
    color: #333;
    font-weight: 400;
    line-height: 1.5;
    display: inline-block;
    margin: 0;
    .title-tag
      display: inline-block;
      padding: 3px 4px 4px;
      margin-left: 3px;
      font-size: 12px;
      border-radius: 2px;
      color: #fff;
      font-weight: 400;
      vertical-align: middle;
      line-height: 1;
      margin-top: -4px;
.item-subtitle-wrap
  width: 740px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  position: relative;
  padding: 11px 20px;
  margin-bottom: 6px;
  .item-subtitle:not(:last-child)
    margin-bottom: 8px;
  .item-subtitle
    background: url('data:image/png;base64,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') no-repeat 0 -28px;
    padding-left: 20px;
    font-size: 14px;
    font-family: PingFang SC;
    line-height: 1.3;
    color: #666;
  .left-arrow
    width: 18px;
    height: 18px;
    background-color: #f8f8f8;
    position: absolute;
    left: -9px;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
.report-wrap
  width: 740px;
  position: relative;
  height: 12px;
  line-height: 12px;
  margin-top: 5px;
  margin-bottom: 4px;
  .report-content
    font-size: 12px;
    font-family: PingFang SC;
    color: #666;
    position: absolute;
    right: 0;
.item-streamer
  width: 740px;
  height: 40px;
  line-height: 40px;
  position: relative;
  font-size: 12px;
  background-size: 100%;
  background-repeat: no-repeat;
// .item-price
//   display: -moz-flex;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-align: center;
//   -moz-align-items: center;
//   align-items: center;
//   width: 740px;
//   box-sizing: border-box;
//   padding: 14px 20px;
//   min-height: 80px;
//   position: relative;
//   background: url(https://img.alicdn.com/tfs/TB19ry8SpXXXXaKaFXXXXXXXXXX-640-80.png);
//   background-size: cover;
//   .price-dl
//     line-height: 28px;
//     .price-name
//       float: left;
//       font-size: 12px;
//       color: #666;
//     .price-content
//       margin-left: 80px;
//       font-size: 12px;
//       em
//         margin-right: 5px;
//         font-style normal
//     .big-price
//       font-size: 24px;
//       color: #ff5000;
//       font-weight: 500;
//       em
//         font-size 12px
//       .promotion
//         background-color: #ff5000;
//         border-radius: 2px;
//         color: #fff;
//         height: 14px;
//         line-height: 14px;
//         font-size: 10px;
//         padding: 2px 4px;
//         transform: scale(.83);
//         -webkit-transform: scale(.83);
//         display: inline-block;
//   .info-list
//     height: 40px;
//     position: absolute;
//     right: 26px;
//     top: 50%;
//     margin-top: -20px;
//     .info-item
//       width: 75px;
//       text-align: center;
//       display: block;
//       float: left;
//       .item-data
//         color: #ee7500;
//         font-size: 18px;
//         font-style normal
//       .item-name
//         display: block;
//         color: #a5a5a5;
//         font-size: 12px;
//         border-right: 1px solid #e0e0e0;
//   .score
//     font-size: 12px;
//     color: #ccc;

// .discount-wrap
//   height: auto;
//   max-height: 0;
//   overflow: hidden;
//   transition: all 1.5s;
//   -moz-transition: all 1.5s;
//   -webkit-transition: all 1.5s;
//   -o-transition: all 1.5s;
//   .item-coupon-wrap
//     width: 740px;
//     box-sizing: border-box;
//     background-color: #f8f8f8;
//     padding: 5px 20px;
//     font-size: 12px;
//     .item-coupon-title
//       float: left;
//       width: 60px;
//       color: #666;
//     .item-coupon:not(:last-child)
//       margin-bottom: 10px;
//     .item-coupon
//       width: 620px;
//       overflow: hidden;
//       height: 18px;
//       margin-left: 80px;
//       line-height: 18px;
//       color: #3d3d3d;
//       .coupon-img
//         margin-right: 6px;
//         position: relative;
//         top: 2px;
//         height: 12px;
//       .coupon-get
//         color: #ff0036;
//         text-decoration: underline!important;
//         margin-left: 6px;
//         cursor: pointer;
// .mileage-wrap
//   height: 0;
//   overflow: hidden;
//   transition: all .5s;
//   -moz-transition: all .5s;
//   -webkit-transition: all .5s;
//   -o-transition: all .5s;
//   .item-mileage-wrap
//     width: 740px;
//     box-sizing: border-box;
//     background-color: #f8f8f8;
//     padding: 5px 20px;
//     font-size: 12px;
//     &::after
//       content ''
//       height 0
//       visibility hidden
//       clear both
//       display block
//     .item-mileage-title
//       float: left;
//       width: 60px;
//       color: #666;
//     .item-mileage
//       margin-left: 80px;
//       line-height: 18px;
//       height: 18px;
//       color: #3d3d3d;
//       .mileage-img
//         margin-right: 6px;
//         position: relative;
//         top: 2px;
//         height: 12px;
// .bottom-border
//   border-bottom: 1px dotted #c9c9c9;
//   margin-bottom: 20px;
//   padding: 16px 0 0 20px;
//   width: 720px;
//   .item-desc-item
//     float: left;
//     width: 355px;
//     margin-bottom: 12px;
//     .item-desc-title
//       float: left;
//       color: #777;
//       font-size: 12px;
//       height: 18px;
//       line-height: 18px;
//       width: 70px;
//       overflow: hidden;
//       padding-right: 10px;
//       span
//         display: inline-block;
//       .l
//         width: 14px;
//         text-align: left;
//       .m
//         width: 20px;
//         text-align: center;
//       .r
//         width: 14px;
//         text-align: right;
//   .item-desc-content
//     font-size: 12px;
//     line-height: 18px;
//     width: 265px;
//     color: #3d3d3d;
//     float: left;
//     span:not(:last-child)
//       margin-right: 10px;
//     .item-icon
//       background: url('data:image/png;base64,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') no-repeat 0 -230px;
//       padding-left: 18px;
// .property-select
//   width: 740px;
//   box-sizing: border-box;
//   padding-bottom: 10px;
</style>
