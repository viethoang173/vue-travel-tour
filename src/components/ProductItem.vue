<template>
  <div class="tour-element">
    <div class="box-images">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="tour-content">
      <div class="tour-title tour-content-top">
        <div class="tour-icon">
          <img src="@/assets/images/Vector.png" alt="" width="13" />
        </div>
        <h4 class="span title">{{ item.title }}</h4>
      </div>
      <div class="tour-title">
        <div class="tour-icon">
          <img src="@/assets/images/dongho1.png" alt="" width="18" />
        </div>
        <div class="span numdate">{{ item.time }}</div>
      </div>
      <div class="group-info">
        <div>
          <div>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="badge-tours" v-if="item.feature == 1">Best Seller</div>
        </div>
        <div class="group-price">
          <span class="price-goc">{{ item.price_off }}đ</span>
          <span class="price-ban">{{ item.price }}đ</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-item",
  props: {
    item: Object,
    methods: {
      formatPrice(value) {
        let val = (value / 1).toFixed(2).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
    },
  },
};
</script>

<style>
</style>