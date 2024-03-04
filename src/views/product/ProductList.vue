<template>
  <div class="product__list">
    <banner-comp />

    <section class="product-grid">
      <div class="wrap">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4" v-for="item in products" :key="item">
              <product-item :item="item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BannerComp from "@/components/BannerComp.vue";
import ProductItem from "../../components/ProductItem.vue";

export default {
  name: "product_list",
  components: {
    ProductItem,
    BannerComp,
  },
  data() {
    return {
      products: [
        {
          id: "1",
          title: "Tour Ninh Bình: Cố Đô Hoa Lư - Tam Cốc - Hang Múa",
          description:
            "Đội ngũ chuyên gia của chúng tôi đã lựa chọn cẩn thận tất cả các điểm đến trong trang web này",
          image: require("@/assets/images/shutterstock_772769227-700x500.jpg"),
          created: "7",
          time: "7 days",
          star: 5,
          feature: 1,
          price: "500000",
          price_off: "600000",
        },
        {
          id: "1",
          title: "Tour Quy Nhơn - Tuy Hòa 4N3Đ",
          description:
            "Đội ngũ chuyên gia của chúng tôi đã lựa chọn cẩn thận tất cả các điểm đến trong trang web này",
          image: require("@/assets/images/shutterstock_772769227-700x500.jpg"),
          created: "7",
          time: "5 days",
          star: 5,
          feature: 0,
          price: "500000",
          price_off: "600000",
        },
        {
          id: "1",
          title: "Tour tâm linh: Chùa Bái Đính - Quần thể danh thắng Tràng An",
          description:
            "Đội ngũ chuyên gia của chúng tôi đã lựa chọn cẩn thận tất cả các điểm đến trong trang web này",
          image: require("@/assets/images/shutterstock_772769227-700x500.jpg"),
          created: "7",
          time: "3 days",
          star: 5,
          feature: 1,
          price: "500000",
          price_off: "600000",
        },
      ],
    };
  },
};
</script>

<style>
</style>