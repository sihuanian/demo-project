<template>
  <div>
    <div class="picture">
      <img @tap="handleMusicPlay" :src="isMusicPlay?'/static/images/music/stop.png':'/static/images/music/start.png'" class="play" />
      <img :src="detailObj.detail_img" class="detail_img" />
    </div>
    <div class="author">
      <img :src="detailObj.avatar" class="avatar" />
      <span>{{detailObj.author}}</span>
      <span>发布于 </span>
      <span>{{detailObj.date}}</span>
    </div>
    <p class="title">{{detailObj.title}}</p>
    <div class="icon-img">
      <div class="line"></div>
      <div class="share-img">
        <img @tap="handleCollected" :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" class="star" />
        <img @tap="handleShare" src="/static/images/icon/share.png" class="share" />
      </div>
    </div>
    <Button class="btn" open-type="share">转发此文章</Button>
    <p class="content">{{detailObj.detail_content}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import isPlayObj from '../../datas/isPlay'

export default {
  data: {
    detailObj: {},
    isCollected: false,
    isMusicPlay: false
  },
  beforeMount() {
    // 得到传递的参数 index 哪个页面 取代原生小程序中的 onLoad(options)
    this.index = this.$mp.query.index
    let oldStorage = wx.getStorageSync('isCollected')
    if (!oldStorage) {
      wx.setStorage({
        key: 'isCollected',
        data: {}
      })
    } else {
      this.isCollected = (oldStorage[this.index]?true:false)
    }

    isPlayObj.pageIndex === this.index && isPlayObj.isPlay?this.isMusicPlay = true:this.isMusicPlay = false

    wx.onBackgroundAudioPlay(() => {
      this.isMusicPlay = true
      isPlayObj.pageIndex = this.index
      isPlayObj.isPlay = true
    })
    wx.onBackgroundAudioPause(() => {
      this.isMusicPlay = false
      isPlayObj.isPlay = false
    })
  },
  mounted() {
    this.detailObj = this.listTmp[this.$mp.query.index]
  },
  computed: {
    ...mapState(['listTmp'])
  },
  methods: {
    handleShare() {
      wx.showActionSheet({
        itemList:[
          '分享到朋友圈',
          '分享到qq空间',
          '分享到微博'
        ]
      })
    },
    handleMusicPlay() {
      let isMusicPlay = !this.isMusicPlay
      this.isMusicPlay = isMusicPlay
      let {dataUrl,title} = this.detailObj.music
      if(isMusicPlay) {
        wx.playBackgroundAudio({
          dataUrl,
          title
        })
      }else {
        wx.pauseBackgroundAudio()
      }
    },
    handleCollected() {
      let isCollected = !this.isCollected
      this.isCollected = isCollected
      let title = isCollected?'收藏成功':'收藏失败'
      wx.showToast({
        title,
        icon: 'success'
      })

      let oldStorage = wx.getStorageSync('isCollected')
      oldStorage[this.index] = isCollected

      wx.setStorage({
        key: 'isCollected',
        data: oldStorage
      })
    }
  }

}
</script>

<style>
.detail_img {
  width: 100%;
}

.avatar {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  margin-left: 15rpx;
  vertical-align: middle;
}

.author {
  margin: 20rpx 0;
}

.author span {
  margin: 0 20rpx;
}

.title {
  font-weight: 700;
  margin-left: 15rpx;
  margin-bottom: 20rpx;
}

.icon-img {
  position: relative;
}

.line {
  border: 2rpx solid #ccc;
  width: 100%;
  position: absolute;
  top: 50%;
  z-index: -1;
}

.share,
.star {
  width: 80rpx;
  height: 80rpx;
  margin: 0 20rpx;
}

.share-img {
  display: flex;
  justify-content: flex-end;
}

.btn {
  width: 250rpx;
  margin: 10rpx auto;
}

.content {
  text-indent: 2em;
  padding: 0 15rpx;
}

.picture {
  position: relative;
}

.play {
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40rpx;
  margin-top: -40rpx;
}
</style>
