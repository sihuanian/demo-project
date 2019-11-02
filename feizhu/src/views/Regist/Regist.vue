<template>
  <div class="text-center">
    <div class="title">欢迎注册</div>
    <div class="content-one">
      <input type="text" id="username" placeholder="请输入用户名" required />
    </div>
    <div class="content-two">
      <input type="password" id="pwd" placeholder="请输入密码" required />
    </div>
    <div class="button">
      <input type="submit" value="立即注册" class="submit" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    regist () {
      this.$store.dispatch('user/regist', {
        username: this.username,
        password: this.password
      })
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus">
.text-center
  margin-top 150px
  text-align center
  .title
    font-size 44px
  .content-one
    margin-top 50px
  .content-two
    margin 50px auto
  input
    width 438px
    height 50px
    outline none
    font-size 20px
    padding 0 20px
    border 1px solid #aaa
    border-radius 4px
    line-height 50px
  .submit
    width 478px
    height 60px
    color #fff
    font-size 24px
    border 1px #3083ff solid
    background-color #3083ff
    box-shadow 0 5px 8px 0 rgba(24, 95, 255, 0.1)
</style>
