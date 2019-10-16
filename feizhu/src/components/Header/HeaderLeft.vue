<template>
  <div>
    <ul id="J_TSiteNavBdL" class="tsite-nav-bd-l">
      <li class="menu home" data-spm>
        <div class="menu-hd">
          <a href="//www.fliggy.com/" target="_top">
            <span class="iconfont icon-fangzi"></span>
            <span>飞猪</span>
          </a>
        </div>
      </li>
      <li id="J_TLoginInfo" class="menu" data-spm>
        <div id="J_TLoginInfoHd" class="menu-hd">
          <span class="l">Hi，最近想去哪里玩？</span>
          <a
            href="https://login.taobao.com/member/login.jhtml?f=top&amp;redirectURL=https%3A%2F%2Fwww.fliggy.com%2F%3Fttid%3Dsem.000000736%26hlreferid%3Dbaidu.082076%26route_source%3Dseo"
            target="_top"
          >请登录</a>
          <a
            href="http://reg.taobao.com/member/new_register.jhtml?from=tbtop&amp;ex_info=&amp;ex_sign="
            target="_top"
          >免费注册</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.tsite-nav-bd-l
  font-size 12px
  float left
  .menu
    float left
    .menu-hd
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
        .icon-fangzi
          margin-right 5px
          line-height 24px
          line-height 20px\0
          _line-height 24px
          color #ffc300!important
        span
          float left
          cursor pointer
      .l
        color #aaa
        float left
</style>
