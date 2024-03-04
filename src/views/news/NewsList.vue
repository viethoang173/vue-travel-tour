<template>
  <div class="news__list">
    <banner-comp />

    <div class="news-grid">
      <div class="wrap">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4" v-for="item in newsList" :key="item.id">
              <news-item :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from "@/components/NewsItem.vue";
import BannerComp from "@/components/BannerComp.vue";
export default {
  components: { NewsItem, BannerComp },
  name: "news_list",
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: "Chiêm ngưỡng vẻ đẹp hoa mận vùng cao trong tour Tết Mộc Châu",
          description:
            "Đến Sơn La cùng tour Tết Mộc Châu 2N1Đ , du khách sẽ có nhiều trải nghiệm đầy thích thú và mãn nhãn trước khung cảnh núi rừng vùng cao ngập tràn sắc trắng tinh khôi của hoa mận.",
          image: require("@/assets/images/shutterstock_772769227-700x500.jpg"),
          feature: 1,
          created: "3/4/2024",
        },
        {
          id: 2,
          title: "Chiêm ngưỡng vẻ đẹp hoa mận vùng cao trong tour Tết Mộc Châu",
          description:
            "Đến Sơn La cùng tour Tết Mộc Châu 2N1Đ , du khách sẽ có nhiều trải nghiệm đầy thích thú và mãn nhãn trước khung cảnh núi rừng vùng cao ngập tràn sắc trắng tinh khôi của hoa mận.",
          image: require("@/assets/images/shutterstock_772769227-700x500.jpg"),
          feature: 1,
          created: "3/4/2024",
        },
        {
          id: 3,
          title: "Chiêm ngưỡng vẻ đẹp hoa mận vùng cao trong tour Tết Mộc Châu",
          description:
            "Đến Sơn La cùng tour Tết Mộc Châu 2N1Đ , du khách sẽ có nhiều trải nghiệm đầy thích thú và mãn nhãn trước khung cảnh núi rừng vùng cao ngập tràn sắc trắng tinh khôi của hoa mận.",
          image: require("@/assets/images/shutterstock_772769227-700x500.jpg"),
          feature: 1,
          created: "3/4/2024",
        },
        {
          id: 4,
          title: "Chiêm ngưỡng vẻ đẹp hoa mận vùng cao trong tour Tết Mộc Châu",
          description:
            "Đến Sơn La cùng tour Tết Mộc Châu 2N1Đ , du khách sẽ có nhiều trải nghiệm đầy thích thú và mãn nhãn trước khung cảnh núi rừng vùng cao ngập tràn sắc trắng tinh khôi của hoa mận.",
          image: require("@/assets/images/shutterstock_772769227-700x500.jpg"),
          feature: 1,
          created: "3/4/2024",
        },
      ],
    };
  },
};
</script>

<style>
</style>