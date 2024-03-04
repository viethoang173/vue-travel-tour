<template>
  <div id="contact">
    <div class="banner">
      <div class="wrap">
        <div class="container-fluid">
          <div class="banner-wrap">
            <h2 class="banner-title">CONTACT US</h2>
            <div class="banner-sub">Get Intouch</div>
          </div>
        </div>
      </div>
    </div>

    <section class="info">
      <div class="wrap">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4">
              <div class="info__element">
                <i class="info__icon fa fa-phone" aria-hidden="true"></i>
                <div class="info__name">PHONE</div>
                <div class="info__des">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings.
                </div>
                <a class="info__value" href=""> +1-2345-2345 </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="info__element">
                <i class="info__icon fa fa-envelope-o" aria-hidden="true"></i>
                <div class="info__name">EMAIL</div>
                <div class="info__des">
                  EMAIL A wonderful serenity has taken possession of my entire
                  soul, like these sweet mornings.
                </div>
                <a class="info__value" href=""> +1-2345-2345 </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="info__element">
                <i
                  class="info__icon fa fa-location-arrow"
                  aria-hidden="true"
                ></i>
                <div class="info__name">LOCATION</div>
                <div class="info__des">
                  4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342
                </div>
                <a class="info__value" href=""> +1-2345-2345 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="form">
      <div class="wrap">
        <div class="container-fluid">
          <div class="box-heading">
            <h2 class="heading">LEAVE US YOUR INFO</h2>
            <div class="sub-heading">and we will get back to you.</div>
            <div class="line"></div>
          </div>
          <form class="form__contact">
            <div class="row">
              <div class="col-sm-6">
                <input type="text" placeholder="Họ tên" class="form__control" />
              </div>
              <div class="col-sm-6">
                <input type="text" placeholder="Email" class="form__control" />
              </div>
              <div class="clearfix"></div>
              <div class="col-sm-12">
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  class="form__control"
                />
              </div>
              <div class="col-sm-12">
                <textarea
                  name=""
                  placeholder="Nội dung"
                  class="form__control"
                  cols="10"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <div class="map box-images">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6055950800705!2d105.8508411!3d21.008441299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8a968ddd2d%3A0xce9a15a5450e182!2zMjcgxJDhuqFpIEPhu5MgVmnhu4d0LCBD4bqndSBE4buBbiwgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1704690820472!5m2!1svi!2s"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView"
};
</script>

<style>
</style>