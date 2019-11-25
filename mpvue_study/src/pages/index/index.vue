<template>
  <div class="index-container">
    <img class="index-img" :src="userInfo.avatarUrl" alt="" v-if="isShow">
    <Button @getuserinfo="getUserInfo" open-type="getUserInfo" v-if="!isShow">点击获取用户信息</Button>
    <p class="getUserInfo">hello {{userInfo.nickName}}</p>
    <div @tap="toDetail" class="goStudy">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: {
      userInfo: {},
      isShow: false
    },

    beforeMount() {
      this.handerGetUserInfo()
    },

    methods: {
      getUserInfo(data) {
        if (data.mp.detail.rawData) {
          this.handerGetUserInfo()
        }
      },

      handerGetUserInfo() {
        wx.getUserInfo({
          success: (data) => {
            // console.log(data,111)
            this.userInfo = data.userInfo
            this.isShow = true
          },
          fail: () => {
            console.log('获取用户信息失败。')
          }
        })
      },

      toDetail() {
        wx.redirectTo({
          url: '/pages/list/main'
        })
      }
    }
  }
</script>

<style>
  page {
    background-color: #8bc345;
  }

  .index-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .index-img {
    width: 200rpx;
    height: 200rpx;
    margin-top: 180rpx;
    border-radius: 50%;
  }

  .getUserInfo {
    padding: 150rpx;
    font-size: 40rpx;
    font-weight: 700;
  }

  .goStudy {
    width: 260rpx;
    height: 70rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rpx;
    border: 1rpx solid #ccc;
  }

  Button {
    width: 200rpx;
    height: 200rpx;
    border-radius: 50%;
    margin-top: 200rpx;
  }
</style>
