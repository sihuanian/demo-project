<template>
  <div class="text-center">
        <div>
            <div class="title">欢迎登录</div>
            <div class="content-one">
                <el-input v-model="username" placeholder="请输入你的用户名"></el-input>
            </div>

            <div class="content-two">
                <el-input placeholder="请输入密码"  v-model="password" show-password></el-input>
            </div>

            <div class="button">
                <input type="submit" value="立即登录" class="submit" @click="login">
            </div>
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
    login () {
      if (this.username === 'sihuanian' && this.password === '123456') {
        this.$store.dispatch('user/login', {
          username: this.username,
          password: this.password
        })
        this.$router.back()
      } else {
        alert('用户名或密码错误')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.text-center
  margin-top 150px
  .title
    font-size 44px
  .submit,.el-input
    width 478px
    height 60px
    outline none
    font-size 20px
    border-radius 4px
    line-height 60px
    box-sizing border-box
  input
    border 1px solid #aaa
    padding 0 20px
  .content-one
    margin-top 50px

  .content-two
    margin 50px auto

  .submit
    color #fff
    font-size 24px
    border 1px #3083ff solid
    background-color #3083ff
    box-shadow 0 5px 8px 0 rgba(24,95,255,.1)
</style>
