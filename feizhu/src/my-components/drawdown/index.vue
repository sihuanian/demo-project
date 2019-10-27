<template>
  <ul class="drawdown">
    <li class="drawdown-item" v-for="(item, index) in drawdownList" :key="index">
      <a :href="item.url">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    // {title, url}
    drawdownList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
.drawdown {
  position: absolute;
  border: 1px solid #e5e5e5;
  padding-top: 10px;
  z-index: 999999;
}
.drawdown-item {
  font-size: 12px;
  display: block;
  padding: 0 5px;
  line-height: 24px;
  white-space: nowrap;
  color: #6C6C6C;
}
.drawdown-item a {
  color: #6c6c6c;
  text-decoration: none;
}
</style>
