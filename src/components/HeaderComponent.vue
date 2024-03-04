<template>
  <div class="header-top">
    <div class="wrap">
      <div class="container-fluid">
        <div class="header-top-element">
          <div class="header-top-left">
            <div class="group-icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <div>Số 27, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</div>
            </div>
            <div class="group-icon">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <div>cskh@webi.vn</div>
            </div>
          </div>
          <div class="header-top-right">
            <div class="group-icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <div>0398989333</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="box-navbar">
    <div class="wrap">
      <div class="container-fluid">
        <div class="nav-element">
          <a class="logo-header" href="./index.html">
            <img src="../assets/images/logo-v3.png" alt="" />
          </a>
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> Trang chủ </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                Về chúng tôi
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link"> Điểm đến </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tour" class="nav-link">
                Tour
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="dLabel">
                <li><a href="">New York Office</a></li>
                <li><a href="">New York Office</a></li>
                <li><a href="">New York Office</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/news" class="nav-link">Tin tức</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Liên hệ</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style>
</style>