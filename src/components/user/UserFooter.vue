<!-- eslint-disable -->
<template>
  <footer class="footer container-fluid">
    <div id="footer-content" class="container text-center pt-3">
      <div class="row">
        <div id="footer-logo" class="col-6 col-xl-2 d-flex justify-content-start">
          <router-link to="/" class="fs-2 fw-bold" style="color: #2c3e50"> VL & CC </router-link>
        </div>
        <div id="footer-social" class="col-6 col-xl-1 order-xl-2">
          <ul class="list-unstyled d-flex justify-content-end">
            <li class="pe-3">
              <a href="#"><font-awesome-icon icon="fab fa-instagram" class="fs-3" /></a>
            </li>
            <li class="pe-3">
              <a href="#"><font-awesome-icon icon="fab fa-facebook" class="ps-2 fs-3" /></a>
            </li>
          </ul>
        </div>
        <div id="footer-contact" class="col-12 col-xl-9 order-xl-1">
          <ul class="d-flex text-start flex-column flex-xl-row px-0 list-unstyled">
            <li class="ps-0 px-xl-3 px-xxl-4">
              <a href="#" class="lh-lg">
                <font-awesome-icon icon="fas fa-phone " class="pe-2 fs-5" /> 0912-345678</a
              >
            </li>
            <li class="ps-0 px-xl-3 px-xxl-4">
              <a href="#" class="lh-lg"
                ><font-awesome-icon icon="fas fa-envelope " class="pe-2 fs-5" />vlcc@testmail.com</a
              >
            </li>
            <li class="ps-0 px-xl-3 px-xxl-4">
              <a href="#" class="lh-lg"
                ><font-awesome-icon
                  icon="fas fa-location-dot "
                  class="pe-2 fs-5"
                />台南市VL區CC路365號</a
              >
            </li>
            <li class="ps-0 px-xl-3 px-xxl-4">
              <a href="#" class="lh-lg"
                ><font-awesome-icon icon="fas fa-headphones " class="pe-2 fs-5" />週一至週五
                09:00~17:00</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      id="footer-annotation"
      class="container pt-3 pb-4 text-secondary fw-bold text-start text-md-center"
    >
      <span>無商業用途，僅供學習使用</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  font-awesome-icon {
    vertical-align: middle;
  }
  #footer-content {
    border-bottom: 1px solid #cccccc;
  }
  #footer-contact {
    padding-top: 12px;
    a {
      font-weight: 500;
      font-style: 16px;
      color: #9e5d30;
    }
  }
  #footer-social {
    padding-top: 12px;
    a {
      color: #2c3e50;
      line-height: 1.5;
    }
  }
}
</style>
<!-- eslint-disable -->
