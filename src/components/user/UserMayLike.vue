<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import { RouterLink } from 'vue-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination];
</script>
<template>
  <div class="likes container-fluid py-4 py-md-7">
    <div class="container">
      <div class="likes-title text-start d-flex justify-content-between">
        <h2 class="pb-4">您可能會喜歡</h2>
        <router-link to="/products" class="btn mb-4">查看更多</router-link>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :speed="1200"
        :loop="true"
        :space-between="30"
        :pagination="{ clickable: true }"
        style="--swiper-theme-color: #ce9d7b"
      >
        <!-- :navigation="true" -->
        <swiper-slide
          ><div class="card rounded-0">
            <img class="card-img rounded-0" src="@/images/cc_beach.jpeg" alt="" />
            <div
              class="card-body card-img-overlay bg-black text-start rounded-0"
              style="--bs-bg-opacity: 0.5"
            >
              <h5 class="card-title text-white pb-3 border-bottom mb-3">旅游拍攝</h5>
              <p class="card-text text-white">
                因應後疫情潮流，VLCC旅拍服務即日起 至2/13日享有9折優惠。
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="card rounded-0">
            <img class="card-img rounded-0" src="@/images/cc_beach.jpeg" alt="" />
            <div
              class="card-body card-img-overlay bg-black text-start rounded-0"
              style="--bs-bg-opacity: 0.5"
            >
              <h5 class="card-title text-white pb-3 border-bottom mb-3">旅游拍攝</h5>
              <p class="card-text text-white">
                因應後疫情潮流，VLCC旅拍服務即日起 至2/13日享有9折優惠。
              </p>
            </div>
          </div></swiper-slide
        >
        <swiper-slide
          ><div class="card rounded-0">
            <img class="card-img rounded-0" src="@/images/cc_beach.jpeg" alt="" />
            <div
              class="card-body card-img-overlay bg-black text-start rounded-0"
              style="--bs-bg-opacity: 0.5"
            >
              <h5 class="card-title text-white pb-3 border-bottom mb-3">旅游拍攝</h5>
              <p class="card-text text-white">
                因應後疫情潮流，VLCC旅拍服務即日起 至2/13日享有9折優惠。
              </p>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/all.scss';

.likes {
  background-color: #fff7f2;
}
.temp {
  background-image: url('@/images/cc_beach.jpeg');
}

.likes-title {
  a {
    text-decoration: none;
    font-weight: bold;
    color: #ce9d7b;
    border: 2px solid #ce9d7b;
  }
}
.card {
  height: 280px;

  &-img {
    object-fit: cover;
    height: 100%;
    &-overlay {
      top: 50%;
      height: 50%;
      @include media-breakpoint-up(xl) {
        top: 60%;
        height: 40%;
      }
    }
  }
}
</style>
