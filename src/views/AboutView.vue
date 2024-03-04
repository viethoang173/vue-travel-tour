<template>
  <div id="about">
    <banner-comp/>

    <section class="intro">
      <div class="wrap">
        <div class="container-fluid">
          <div class="box-heading">
            <h2 class="heading">Giới thiệu</h2>
            <div class="sub-heading">
              See what others are See what others are saying about us See what
              others are saying about us See what others are saying about us
              saying about us
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="intro-element">
                <div class="intro-element__title">Business Plan</div>
                <div class="intro-element__des">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there.
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="intro-element">
                <div class="intro-element__title">Brand Identity</div>
                <div class="intro-element__des">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there.
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="intro-element">
                <div class="intro-element__title">Social Media</div>
                <div class="intro-element__des">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there.
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="intro-element">
                <div class="intro-element__title">Data Analyze</div>
                <div class="intro-element__des">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="specifi">
      <div class="wrap">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3">
              <div class="specifi-element">
                <div class="specifi-element__title">20000+</div>
                <div class="specifi-element__des">Customers</div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="specifi-element">
                <div class="specifi-element__title">1400+</div>
                <div class="specifi-element__des">Projects</div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="specifi-element">
                <div class="specifi-element__title">16800+</div>
                <div class="specifi-element__des">Working Hours</div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="specifi-element">
                <div class="specifi-element__title">17000+</div>
                <div class="specifi-element__des">SKUs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ourteam">
      <div class="wrap">
        <div class="container-fluid">
          <div class="box-heading">
            <h2 class="heading">Our team</h2>
            <div class="sub-heading">See what others are saying about us</div>
          </div>
          <swiper
            :slides-per-view="4"
            :space-between="30"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="modules"
          >
            <swiper-slide v-for="n in 10" :key="n">
              <div class="item">
                <div class="box-images">
                  <img src="../assets/images/ourteam.jpg" alt="" />
                  <div class="box-content">
                    <div class="name">JEANETTE KINGSTON</div>
                    <div class="position">Chief Executive Officer</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="develop">
      <div class="wrap">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <div class="develop-leftside">
                <div class="leftside-element">
                  <div class="leftside-element__title">
                    Ornare Quam Justo Tellusv
                  </div>
                  <div class="leftside-element__des">
                    Maecenas faucibus mollis interdum. Donec id elit non mi
                    porta gravida at eget metus. Aenean laciniaMaecenas faucibus
                    mollis interdum.
                  </div>
                </div>
                <div class="leftside-element">
                  <div class="leftside-element__title">
                    Ornare Quam Justo Tellusv
                  </div>
                  <div class="leftside-element__des">
                    Maecenas faucibus mollis interdum. Donec id elit non mi
                    porta gravida at eget metus. Aenean laciniaMaecenas faucibus
                    mollis interdum.
                  </div>
                </div>
                <div class="leftside-element">
                  <div class="leftside-element__title">
                    Ornare Quam Justo Tellusv
                  </div>
                  <div class="leftside-element__des">
                    Maecenas faucibus mollis interdum. Donec id elit non mi
                    porta gravida at eget metus. Aenean laciniaMaecenas faucibus
                    mollis interdum.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="develop-rightside">
                <div class="heading">
                  Sollicitudin Vestibulum Vulputate Ipsum
                </div>
                <div class="sub-heading">
                  <p>
                    Etiam porta sem malesuada magna mollis euismod. Vivamus
                    sagittis lacus vel augue laoreet rutrum faucibus dolor
                    auctor.
                  </p>
                  <p>
                    Maecenas faucibus mollis interdum. Donec id elit non mi
                    porta gravida at eget metus. Aenean lacinia. Donec
                    ullamcorper nulla non metus auctor fringilla.
                  </p>
                  <p>
                    Maecenas faucibus mollis interdum. Donec id elit non mi
                    porta gravida at eget metus. Aenean lacinia. Donec
                    ullamcorper nulla non metus auctor fringilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="partner">
      <div class="wrap">
        <div class="container-fluid">
          <div class="box-heading">
            <h2 class="heading">Đối tác</h2>
            <div class="sub-heading">See what others are saying about us</div>
          </div>
          <swiper
            :slides-per-view="5"
            :space-between="30"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="modules"
          >
            <swiper-slide>
              <div class="item">
                <img src="../assets/images/banner-1.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item">
                <img src="../assets/images/banner-2.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item">
                <img src="../assets/images/banner-3.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item">
                <img src="../assets/images/banner-4.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="item">
                <img src="../assets/images/banner-5.png" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import BannerComp from "@/components/BannerComp.vue";


export default {
  components: {
    Swiper,
    SwiperSlide,
    BannerComp,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>