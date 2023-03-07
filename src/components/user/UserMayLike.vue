<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useProductStore } from '@/stores/productStore';
import { numberToNTD } from '@/utils/useMoney';

const productStore = useProductStore();
const { gotToProduct } = productStore;
const { products } = storeToRefs(productStore);

const modules = [Navigation, Pagination, Autoplay, EffectFade];
</script>
<template>
  <div class="likes container-fluid py-4 py-md-7">
    <div class="container">
      <div class="likes-title text-start d-flex justify-content-between pb-1">
        <h2 class="pb-3">您可能會喜歡</h2>
        <router-link to="/products" class="btn mb-4">查看更多</router-link>
      </div>
      <swiper
        v-if="products?.products?.length"
        :modules="modules"
        :slides-per-view="1.5"
        :speed="1200"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :space-between="12"
        :pagination="{ clickable: true }"
        :breakpoints="{
          767: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }"
        style="--swiper-theme-color: #ce9d7b"
      >
        <!-- :navigation="true" -->
        <swiper-slide v-for="product in products?.products" :key="product.id"
          ><div class="card rounded-0">
            <div class="card-body text-start rounded-0 p-2">
              <div class="card-image pb-2">
                <img class="card-img rounded-0" :src="`${product?.imagesUrl[0]}`" alt="" />
              </div>
              <h6 class="card-title">{{ product.title }}</h6>
              <p class="card-text fs-6">{{ numberToNTD(product?.price) }}</p>
            </div>
            <button
              type="button"
              class="btn stretched-link"
              @click.prevent="gotToProduct(product)"
            /></div
        ></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/all.scss';

.likes {
  background-color: #fff7f2;
  &-title a {
    text-decoration: none;
    font-weight: bold;
    color: #ce9d7b;
    border: 2px solid #ce9d7b;
  }
}

.card {
  height: 240px;

  &-img {
    object-fit: cover;
    height: 156px;
  }
  &-text {
    color: #ce9d7b;
  }

  @include media-breakpoint-up(md) {
    height: 280px;
    &-img {
      height: 200px;
    }
  }
}
</style>
