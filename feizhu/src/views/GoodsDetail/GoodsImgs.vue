<template>
  <div class="goods-imgs">
    <div class="big-img">
      <img :src="currentImg || img" alt="">
    </div>
    <div class="small-imgs">
      <div class="small-item" @mouseenter="showBorder" v-for="(small, index) in imgs" :key="index" :data-index="index">
        <img :src="small.small" alt="">
        <div :class="currentIndex == index ? 'selected' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
      currentImg: ''
    }
  },
  computed: {
    img () {
      return this.imgs && this.imgs[0] && this.imgs[0]['big']
    }
  },
  props: {
    imgs: {
      required: true
    }
  },
  methods: {
    showBorder (e) {
      this.currentIndex = e.currentTarget.dataset.index
      this.currentImg = this.imgs[this.currentIndex]['big']
    }
  }
}
</script>

<style scoped lang="stylus">
.goods-imgs
  width 400px
  height 480px
  display inline-block
  text-align: center;
  background: #fff;
  margin-bottom: 20px;
  .big-img
    margin-bottom: 12px;
    width: 100%;
    height: 400px;
    line-height: 400px;
    text-align: center;
    vertical-align: middle;
    font-size: 0;
    background: #f8f8f8 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAABPCAMAAACAuJRqAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA/FnfBOWiy0Z7bOtNCNq6QhHyK7GtNS/2XdWoiCX5PO+ZgQ4LvrV2GFKekiDIwmkU0IVxQBxjjWUzC0gAAAaLSURBVGjexNjpctpAEATgFjowN0Zc5hKXzWkIBpx+/ydLJVD2aFlppU2q8v1Eqq1ZRtuqEf6Pp6oQ4due0gwpDkWj18686cFW9XiFqkupLLdE6YwULjPxVzXYmZHFUoiYNoWB/FfOlJ6Qos2MBiGsHPhbsfyMLz1KVWWfwhUpXpjV1K70Cm8mwx7uhhQayj6FFtLUfGbl1pDfD37r3GqPKDihsk+hiFQFZrZCfhGl4TPgDSh8QHqmFCDdjlm5yO9TWSJCiUK9hrr7zafUchWVb3/a98Gs1sjtJ+Ocn30KEcbMSbaqWWQ2EXJ7Y5oZUKWFk4e7Xmn71oh5dfmo+48rdxfAivlNenmPboj8NoPkAroAtsxvZXyHKJwabBTqaQUcmNsrDIZU1GHHO06p0RAJnoe/RhpdH9uwNT5pCvgh3lQ5OE2YdPRRpOoVzqNtELddI255oKJ/O2XrkhC/aff1e4PCHEbvVBSg8jaBnxK3wnrKuI3x+VzgrtmXD7kHI5eKnlr3Z51ab3j0kSEeThR83EUtedaeYVQzRUvkUu+0wINjn9IBOn1dgnRl4dMxzHrp0eLNHeq5V6iubcYVobGntLuXMVVOp1khNVpqDSaojB8qmk0eboJGVTPkdSsUPpHFR9qxq70lpm2IuCjQNWeJR2dKTQB4apnnUnMoFrIMgf4Y0vJ4opa4LWWUe3Fs5oN6SrScmcDdQ9iPpkxwhZA0ypUolZCN5yRHS9in3ukKYegwUQ1hWTWl4JfLAaVBWSggWZgSLe/UGy4hrJmsD4z4F+Z20dKkkNzOS/pg2Ka9ygLJ5lSMDNPCtIq4IyV/QOEdqNPeZ65oecHdmDrta9po/l7wYgsG8BxaayPNIDFaVrr2FfCg8XVx11MXLCGktdPCMlrafDD8gUf+Ld2GG+/PghMKG2xoa7AG7KJlSkXjAo3lreya9hkLUaIFEWAW0aLuqdOFVncwunhikqbgeAhoY9KOoDBHi7aESRAim5XSwO6T1pZxraO42Bx7EHJGi2hzv/2yQFYBhQ70wlfGve9hYo4WtYR6sDqvSvPRz91stg2GnbfG62GfcTYcQed55yip8OHBxBwtS1FCEh/JWmoDVV65oi53gZE5WlwRLYlGSLQ2febb1M1Raz8QGT6QOOOsCy6guDx0sv4ELftoiZiok5Isv2o1w+xUYSAKD4JaRVCxWMCCWAStrdVWbGf/K3vn9LwfmEwSEum3glGSm3tnxpKdqkWFDMHIAxpzaflGEZZQIM9MZdPbmHrgLtUhnd/S/nf4wgb0s6QZTuNd2Kv3xtatJp+ePCNpwa06gc4F7dA+soyJtoAau75PWhIUMCEl5aWPPDOqbjXZ5B5pcTINRaxDSzJvWgws1CO43iEtKdJUDjAU40RUwG8krFCfwR3SMkGSD9Z6ppsIRRwBvhM0ISrMpeVCF17oTFkH4FloxgzkeGJp2SBByAtWiWJ25lHupNvGtWUVWSMyynGoo1xQDm4oXa5yXWmpJBXZVCYqmPOJTVI6ykUjB1gmn2xvU86XUFoKZAhetmSUwwbDuIcNMgdWyGORFssZaM2SH4XSsmTehs1etTYTHNZMazP5P1axT8MWFtmzmfumKS3kObJHnINm3I1VxltudBUCRIjDngOurC9NaYKtLy38E+X/1I78q1nlaU+Nrr7g3X5esFbfbxNgp+bS8vvnueVPnIIUP1/FZ8HoKgaHsPqPIGBImkyaWCwtk9d1Ogc1S0c8ulqSVj/qE8QAEGiI4jMtLeZM6Cj3gwqCOcAVG9Rm0mLOjo5yVZv+/kxnqcmmpcWcAx3lbJTjewAwbgYjkLMVSIs5RyrKKW1XtOS68LrS4sKd5KT1eEIpVo8zSgdd1/IJZtBdorrdpmT+wBulHUjh7dC0U2nZE8GLw/06E0ZJlUPfujotZIk5vc1ymTVY72nrliqVwHxPUW2DjvQ2y7XFq5g5yk43S/8J7mCMTQ6kJcja7Jgm6l13juDxpWfIJWSiHG0JRArdvKChzrHsnpq+t/RXLSqt3bNX/EOsgj5ElUP5Np/JrwqKCP+Oo0h8Px7mThPvKWY3Bc8aw6juiZnKNSg19vS7p++ZH8oHULPBTqFfwXOGWlTQgm2CnUKnsVB/j1jN1ccuobPVe4DtcRfQjvMKO6ffY51YexH7TKE19SrDLkl2Hi8FCbYiHzmgg7e+vIXHxHbzIMosU7LAtcvNOAUKpxf6kSUl8MPvAnj+AYRcPQeahlKYAAAAAElFTkSuQmCC') no-repeat 50%;
    img
      vertical-align: middle;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      overflow: hidden;
  .small-imgs
    font-size: 0;
    overflow: hidden;
    .small-item
      display inline-block
      margin: 0 15px 0 0;
      width: 68px;
      height: 68px;
      line-height: 68px;
      font-size: 0;
      cursor: pointer;
      position: relative;
      background: #f8f8f8 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAABPCAMAAACAuJRqAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA/FnfBOWiy0Z7bOtNCNq6QhHyK7GtNS/2XdWoiCX5PO+ZgQ4LvrV2GFKekiDIwmkU0IVxQBxjjWUzC0gAAAaLSURBVGjexNjpctpAEATgFjowN0Zc5hKXzWkIBpx+/ydLJVD2aFlppU2q8v1Eqq1ZRtuqEf6Pp6oQ4due0gwpDkWj18686cFW9XiFqkupLLdE6YwULjPxVzXYmZHFUoiYNoWB/FfOlJ6Qos2MBiGsHPhbsfyMLz1KVWWfwhUpXpjV1K70Cm8mwx7uhhQayj6FFtLUfGbl1pDfD37r3GqPKDihsk+hiFQFZrZCfhGl4TPgDSh8QHqmFCDdjlm5yO9TWSJCiUK9hrr7zafUchWVb3/a98Gs1sjtJ+Ocn30KEcbMSbaqWWQ2EXJ7Y5oZUKWFk4e7Xmn71oh5dfmo+48rdxfAivlNenmPboj8NoPkAroAtsxvZXyHKJwabBTqaQUcmNsrDIZU1GHHO06p0RAJnoe/RhpdH9uwNT5pCvgh3lQ5OE2YdPRRpOoVzqNtELddI255oKJ/O2XrkhC/aff1e4PCHEbvVBSg8jaBnxK3wnrKuI3x+VzgrtmXD7kHI5eKnlr3Z51ab3j0kSEeThR83EUtedaeYVQzRUvkUu+0wINjn9IBOn1dgnRl4dMxzHrp0eLNHeq5V6iubcYVobGntLuXMVVOp1khNVpqDSaojB8qmk0eboJGVTPkdSsUPpHFR9qxq70lpm2IuCjQNWeJR2dKTQB4apnnUnMoFrIMgf4Y0vJ4opa4LWWUe3Fs5oN6SrScmcDdQ9iPpkxwhZA0ypUolZCN5yRHS9in3ukKYegwUQ1hWTWl4JfLAaVBWSggWZgSLe/UGy4hrJmsD4z4F+Z20dKkkNzOS/pg2Ka9ygLJ5lSMDNPCtIq4IyV/QOEdqNPeZ65oecHdmDrta9po/l7wYgsG8BxaayPNIDFaVrr2FfCg8XVx11MXLCGktdPCMlrafDD8gUf+Ld2GG+/PghMKG2xoa7AG7KJlSkXjAo3lreya9hkLUaIFEWAW0aLuqdOFVncwunhikqbgeAhoY9KOoDBHi7aESRAim5XSwO6T1pZxraO42Bx7EHJGi2hzv/2yQFYBhQ70wlfGve9hYo4WtYR6sDqvSvPRz91stg2GnbfG62GfcTYcQed55yip8OHBxBwtS1FCEh/JWmoDVV65oi53gZE5WlwRLYlGSLQ2febb1M1Raz8QGT6QOOOsCy6guDx0sv4ELftoiZiok5Isv2o1w+xUYSAKD4JaRVCxWMCCWAStrdVWbGf/K3vn9LwfmEwSEum3glGSm3tnxpKdqkWFDMHIAxpzaflGEZZQIM9MZdPbmHrgLtUhnd/S/nf4wgb0s6QZTuNd2Kv3xtatJp+ePCNpwa06gc4F7dA+soyJtoAau75PWhIUMCEl5aWPPDOqbjXZ5B5pcTINRaxDSzJvWgws1CO43iEtKdJUDjAU40RUwG8krFCfwR3SMkGSD9Z6ppsIRRwBvhM0ISrMpeVCF17oTFkH4FloxgzkeGJp2SBByAtWiWJ25lHupNvGtWUVWSMyynGoo1xQDm4oXa5yXWmpJBXZVCYqmPOJTVI6ykUjB1gmn2xvU86XUFoKZAhetmSUwwbDuIcNMgdWyGORFssZaM2SH4XSsmTehs1etTYTHNZMazP5P1axT8MWFtmzmfumKS3kObJHnINm3I1VxltudBUCRIjDngOurC9NaYKtLy38E+X/1I78q1nlaU+Nrr7g3X5esFbfbxNgp+bS8vvnueVPnIIUP1/FZ8HoKgaHsPqPIGBImkyaWCwtk9d1Ogc1S0c8ulqSVj/qE8QAEGiI4jMtLeZM6Cj3gwqCOcAVG9Rm0mLOjo5yVZv+/kxnqcmmpcWcAx3lbJTjewAwbgYjkLMVSIs5RyrKKW1XtOS68LrS4sKd5KT1eEIpVo8zSgdd1/IJZtBdorrdpmT+wBulHUjh7dC0U2nZE8GLw/06E0ZJlUPfujotZIk5vc1ymTVY72nrliqVwHxPUW2DjvQ2y7XFq5g5yk43S/8J7mCMTQ6kJcja7Jgm6l13juDxpWfIJWSiHG0JRArdvKChzrHsnpq+t/RXLSqt3bNX/EOsgj5ElUP5Np/JrwqKCP+Oo0h8Px7mThPvKWY3Bc8aw6juiZnKNSg19vS7p++ZH8oHULPBTqFfwXOGWlTQgm2CnUKnsVB/j1jN1ccuobPVe4DtcRfQjvMKO6ffY51YexH7TKE19SrDLkl2Hi8FCbYiHzmgg7e+vIXHxHbzIMosU7LAtcvNOAUKpxf6kSUl8MPvAnj+AYRcPQeahlKYAAAAAElFTkSuQmCC ') no-repeat 50%;
      background-size: contain;
      &:last-child
        margin-right 0
      div
        width: 64px;
        height: 64px;
        border: 2px solid #ff5000;
        position: absolute;
        top: 0;
        left: 0;
        display none
.selected
  display inline-block !important
</style>
