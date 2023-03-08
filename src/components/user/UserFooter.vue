<template>
  <footer class="footer container-fluid bg-white">
    <div class="footer-content container text-center pt-3">
      <div class="row">
        <div class="footer-logo col-6 col-xl-2 d-flex justify-content-start">
          <router-link to="/" class="fs-2 fw-bold"> VL & CC </router-link>
        </div>
        <div class="footer-social col-6 col-xl-1 order-xl-2">
          <ul class="list-unstyled d-flex justify-content-end">
            <li class="pe-3">
              <a href="#"
                ><font-awesome-icon icon="fab fa-fw fa-instagram" class="fs-3"
                  >instagram</font-awesome-icon
                ></a
              >
            </li>
            <li class="pe-0 pe-md-3">
              <a href="#"
                ><font-awesome-icon icon="fab fa-fw fa-facebook" class="ps-2 fs-3">
                  facebook</font-awesome-icon
                ></a
              >
            </li>
          </ul>
        </div>
        <div class="footer-contact col-12 col-xl-9 order-xl-1 row">
          <ul
            class="d-flex justify-content-xl-evenly text-start text-xl-center flex-column flex-xl-row px-0 list-unstyled col-12 col-md col-xl-12"
          >
            <li class="ps-0">
              <a href="#" class="lh-lg">
                <font-awesome-icon icon="fas fa-fw fa-phone " class="pe-2 fs-5" />0912-345678</a
              >
            </li>
            <li class="ps-0">
              <a href="mailto:vlcc@testmail.com" class="lh-lg"
                ><font-awesome-icon
                  icon="fas fa-fw fa-envelope "
                  class="pe-2 fs-5"
                />vlcc@testmail.com</a
              >
            </li>
            <li class="ps-0">
              <a href="https://goo.gl/maps/ZuGdHfA7t2VTihjJ9" class="lh-lg"
                ><font-awesome-icon
                  icon="fas fa-fw fa-location-dot "
                  class="pe-2 fs-5"
                />高雄市六角區學院路365號</a
              >
            </li>
            <li class="ps-0">
              <a href="#" class="lh-lg"
                ><font-awesome-icon icon="fas fa-fw fa-headphones " class="pe-2 fs-5" />週一至週五
                09:00~17:00</a
              >
            </li>
          </ul>
          <iframe
            title="高雄市六角區學院路365號"
            class="h-75 col-12 col-md col-xl-12 border-0 pb-md-0 pb-xl-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.7378673657217!2d120.27745969323308!3d22.626261889382633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04713bde87e7%3A0xf2d65482bc80f9ad!2zODAz6auY6ZuE5biC6bm95Z-V5Y2A5LiD6LOi5LiJ6LevMTIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1678176615299!5m2!1szh-TW!2stw"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
    <div
      class="footer-annotation container pt-3 pb-4 text-secondary fw-bold text-start text-md-center"
    >
      <span>無商業用途，僅供學習使用</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &-logo a {
    color: #2c3e50;
  }

  &-content {
    border-bottom: 1px solid #ccc;
  }

  &-contact {
    padding-top: 12px;
    svg {
      width: 20px;
    }
    a {
      font-weight: 500;
      font-size: 16px;
      color: #9e5d30;
    }
  }

  &-social {
    padding-top: 12px;
    a {
      color: #2c3e50;
      line-height: 1.5;
    }
  }
}
iframe {
  padding-bottom: 72px;
}
</style>
