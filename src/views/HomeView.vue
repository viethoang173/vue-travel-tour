<template>
  <div class="home">
    <div class="banner">
      <div class="wrap">
        <div class="container-fluid">
          <div class="banner-wrap">
            <h2 class="banner-title">Find Next Place To Visit</h2>
            <div class="banner-sub">
              Discover amzaing places at exclusive deals
            </div>
            <form action="">
              <div class="row">
                <div class="col-sm-3 padding0">
                  <div class="group-banner select-control">
                    <input type="text" class="control" />
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="col-sm-3 padding0">
                  <div class="group-banner select-control">
                    <select class="control select-control" name="" id="">
                      <option value="">Destination</option>
                      <option value="">Destination</option>
                      <option value="">Destination</option>
                      <option value="">Destination</option>
                    </select>
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="col-sm-3 padding0">
                  <div class="group-banner select-control">
                    <select class="control" name="" id="">
                      <option value="">Destination</option>
                      <option value="">Destination</option>
                      <option value="">Destination</option>
                      <option value="">Destination</option>
                    </select>
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </div>
                </div>
                <div class="col-sm-3 padding0">
                  <div class="group-banner">
                    <button class="control submit">Search</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="utilities">
      <div class="wrap">
        <div class="container-fluid">
          <div class="utilities-wrap">
            <div class="row">
              <div class="col-sm-4" v-for="item in utilities" :key="item.id">
                <div class="utilities-element">
                  <div class="utilities-icon">
                    <img :src="item.image" :alt="item.title" />
                  </div>
                  <div class="utilities-content">
                    <h3 class="utilities-title">{{ item.title }}</h3>
                    <div class="utilities-des">
                      {{ item.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="destination">
      <div class="wrap">
        <div class="container-fluid">
          <div class="box-heading">
            <h2 class="heading">Popular Destinations</h2>
            <a class="sub-link" href=""
              >View All Popular Tours
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div class="row destination-container">
            <div
              v-for="(item, index) in 2"
              :key="index"
              :class="[index === 0 ? 'col-sm-8' : 'col-sm-4']"
            >
              <destination-comp />
            </div>
            <div class="clearfix"></div>
            <div v-for="(item, index) in 3" :key="index" class="col-sm-4">
              <destination-comp />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tours">
      <div class="wrap">
        <div class="container-fluid">
          <div class="box-heading">
            <h2 class="heading">Popular Destinations</h2>
            <a class="sub-link" href=""
              >View All Popular Tours
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div class="row">
            <div class="col-sm-4" v-for="item in products" :key="item.id">
              <product-item :item="item" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="advdeals">
      <div class="wrap">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 padding0">
              <div class="advdeals-element">
                <div class="deal-name">Enjoy Summer Deals</div>
                <div class="deal-discount">Up to 40% Discount!</div>
                <a class="deal-link" href="">Learn more</a>
                <img
                  class="deal-imgae"
                  src="../assets/images/logo-v3.png"
                  alt=""
                />
                <div class="deals-term">*Terms applied</div>
              </div>
            </div>
            <div class="col-sm-6 padding0">
              <img
                class="advdeals-image"
                src="../assets/images/bgtravel.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tours recommended">
      <div class="wrap">
        <div class="container-fluid">
          <div class="box-heading">
            <h2 class="heading">Our Recommended</h2>
            <a class="sub-link" href=""
              >View All Popular Tours
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div class="row">
            <div class="col-sm-4" v-for="item in products" :key="item.id">
              <product-item :item="item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DestinationComp from "@/components/DestinationComp.vue";
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "HomeView",
  components: {
    DestinationComp,
    ProductItem,
  },
  data() {
    return {
      title: "HomeView",
      utilities: [
        {
          id: "1",
          title: "HƠN 700 ĐIỂM ĐẾN",
          description:
            "Đội ngũ chuyên gia của chúng tôi đã lựa chọn cẩn thận tất cả các điểm đến trong trang web này",
          image: require("@/assets/images/tvicon1.1.png"),
        },
        {
          id: "2",
          title: "ĐẢM BẢO GIÁ TỐT NHẤT",
          description: "Giá khớp trong vòng 48 giờ kể từ khi xác nhận đơn hàng",
          image: require("@/assets/images/tvicon2.1.png"),
        },
        {
          id: "3",
          title: "HỖ TRỢ HÀNG ĐẦU",
          description:
            "Chúng tôi sẵn sàng trợ giúp trước, trong và thậm chí sau chuyến đi của bạn.",
          image: require("@/assets/images/tvicon3.png"),
        },
      ],
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
  methods: {},
};
</script>
