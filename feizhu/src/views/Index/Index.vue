<template>
  <div>
    <my-header />
    <my-input />
    <my-navBar />
    <my-search />
  </div>
</template>

<script>
import MyHeader from '@/components/Header/Header.vue'
import MyInput from '@/components/Input/Input.vue'
import MyNavBar from '@/components/NavBar/NavBar.vue'
import MySearch from '@/components/Search/Search.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyInput,
    MyNavBar,
    MySearch
  }
}
</script>

<style scoped lang="stylus">
</style>
