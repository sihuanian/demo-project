<template>
  <div id="app">
    <!-- <my-header />
    <my-input />
    <my-navBar /> -->
    <router-view/>
  </div>
</template>

<script>
// import MyHeader from '@/components/Header/Header.vue'
// import MyInput from '@/components/Input/Input.vue'
// import MyNavBar from '@/components/NavBar/NavBar.vue'
export default {
  name: 'App',
  components: {
    // MyHeader,
    // MyInput,
    // MyNavBar
  }
}
</script>

<style>
@import './style/global.css';
.clearfix {
  overflow: hidden;
  width: 1190px;
  margin: 0 auto;
}
body {
  background-color: #f2f3f4;
}
</style>
