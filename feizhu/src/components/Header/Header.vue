<template>
  <div class="position">
    <header-left />
    <header-Right />
  </div>
</template>

<script>
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
export default {
  components: {
    HeaderLeft,
    HeaderRight
  }
}
</script>

<style scoped lang="stylus">
.position
  width: 1190px;
  margin: 0 auto;
  background-color: #f2f3f4;
  height 25px
</style>
