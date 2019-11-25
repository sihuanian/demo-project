<template>
  <div class="list-container" @tap="toDetail">
    <div class="authorInfo">
      <img :src="item.avatar" class="avatar">
      <span class="list-date">{{item.date}}</span>
    </div>
    <p class="title">{{item.title}}</p>
    <img :src="item.detail_img" class="list-content-img">
    <p class="list-content">{{item.detail_content}}</p>
    <div class="list-info">
      <img src="/static/images/icon/star.png" class="list-info-img">
      <span>{{item.love_count}}</span>
      <img src="/static/images/icon/eye.png" class="list-info-img">
      <span>{{item.attention_count}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item','index'],
    methods: {
      toDetail() {
        wx.navigateTo({
          url: '/pages/detail/main?index=' + this.index
        })
      }
    }
  }
</script>

<style>
  .list-container {
    display: flex;
    flex-direction: column;
    padding: 20rpx 10rpx;
    border-bottom: 6rpx solid #eee;
  }

  .list-date {
    padding: 15rpx;
    font-size: 28rpx;
  }

  .avatar {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 40rpx;
    margin-left: 15rpx;
  }

  .title {
    font-size: 36rpx;
    font-weight: 700;
    padding: 15rpx;
  }

  .list-content-img {
    width: 100%;
  }

  .list-content {
    text-indent: 2em;
    padding: 10rpx 0;
  }

  .list-info {
    display: flex;
  }

  .list-info-img {
    width: 36rpx;
    height: 36rpx;
    padding-right: 10rpx;
  }

</style>
