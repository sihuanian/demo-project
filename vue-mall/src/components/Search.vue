<template>
  <div>
    <div class="container">
      <Input search enter-button placeholder="输入您想要查找的商品" size="large" v-model="searchData" />
      <Tag
        v-for="(item, index) in promotionTags"
        :key="index"
        closable
        @on-close="closeTags(index)"
      >
        <span @click="selectTags(index)">{{item}}</span>
      </Tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchData: "",
      promotionTags: [
        "买2免1",
        "领200神券",
        "199减100",
        "母婴5折抢",
        "充100送20"
      ]
    };
  },
  methods: {
    closeTags(index) {
      this.promotionTags.splice(index, 1);
    },
    selectTags(index) {
      this.searchData = this.promotionTags[index];
    },
    search() {
      this.$router.push({
        path: "/goodsList",
        query: { searchData: this.searchData }
      });
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 460px;
}
.search {
  margin: 5px 0px;
}
</style>
