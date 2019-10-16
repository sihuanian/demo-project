<template>
  <div id="app">
    <my-header />
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/Header/Header.vue'
export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style>
#app {
  text-align: center;
}
ul, li {
  list-style: none;
}
a {
  color: #6C6C6C;
  text-decoration: none;
}
#app {
  text-align: center;
}
</style>
