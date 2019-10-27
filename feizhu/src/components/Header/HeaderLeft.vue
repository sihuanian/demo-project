<template>
  <ul id="J_TSiteNavBdL" class="tsite-nav-bd-l">
    <li class="menu home" data-spm>
      <div class="menu-hd">
        <router-link to="/">
          <span class="iconfont icon-fangzi"></span>
          <span>飞猪</span>
        </router-link>
      </div>
    </li>
    <li id="J_TLoginInfo" class="menu" data-spm>
      <div id="J_TLoginInfoHd" class="menu-hd">
        <span class="l">Hi，最近想去哪里玩？</span>
        <router-link to="/user" v-if="username === 'sihuanian'">{{username}}</router-link>
        <div v-else style="display: inline-block;">
          <router-link to="/login">请登录</router-link>
          <router-link to="/regist">免费注册</router-link>
        </div>
        <span v-if="username === 'sihuanian'" to="/" @click="esc">退出</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', {
      username: 'getUsername',
      avatar: 'getUserAvatar'
    })
  },
  methods: {
    esc () {
      console.log('esc')
      this.$store.dispatch('user/esc')
    }
  }
}
</script>

<style scoped lang="stylus">
.tsite-nav-bd-l
  float left
  margin 0
  .menu
    float left
    .menu-hd
      font-size 12px
      z-index 10002
      position relative
      padding 0 6px
      height 25px
      line-height 25px
      overflow hidden
      _display inline
      _zoom 1
      a
        float left
        margin-right 7px
        font-size 12px
        color #6C6C6C
        text-decoration none
        &:hover
          color #f39b03
        .icon-fangzi
          margin-right 5px
          line-height 24px
          color #ffc300!important
        span
          float left
          cursor pointer
      .l
        color #aaa
        float left
</style>
