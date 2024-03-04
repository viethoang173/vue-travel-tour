<template>
  <div class="tour-element tour-element--news">
    <div class="box-images">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="tour-content">
      <div class="tour-title tour-content-top">
        <h4 class="span title">{{ item.title }}</h4>
      </div>
      <div class="tour-title">
        <div class="span numdate">{{ item.created }}</div>
      </div>
      <div class="tour-des">{{ item.description }}</div>
      <div class="badge-tours" v-if="item.feature == 1">Best Seller</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news-item",
  props: {
    item: Object,
  },
};
</script>

<style>
</style>