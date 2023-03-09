<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import type { Product } from '@/types';
import FindMoreModal from '@/components/user/UserFindMoreModal.vue';
import UserIndexIntro from '@/components/user/index/UserIndexIntro.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore'; // eslint-disable-line
import { useLoadingStore } from '@/stores/loadingStore';
import { numberToNTD } from '@/utils/useMoney';

const findMoreModalRef = ref<typeof FindMoreModal>();

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const productStore = useProductStore();
const { getProductList, gotToProduct } = productStore;
const { products, tempProduct, categories } = storeToRefs(productStore);
const cartStore = useCartStore();
const { addToCart } = cartStore;

const onClickProductList = () => {
  window.scrollTo({ top: 300, behavior: 'smooth' });
};

const openModal = (modalType: string, currentProduct: Product) => {
  switch (modalType) {
    case 'findMore':
      tempProduct.value = { ...currentProduct } as Product;
      findMoreModalRef.value?.showModal();
      break;
    default:
      break;
  }
};
</script>

<template>
  <UserIndexIntro />
  <div class="container">
    <div class="row mt-5">
      <div class="category-list col-md-3 mb-4">
        <div class="card border-0">
          <div
            class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
          >
            <div class="d-flex justify-content-center align-items-center pe-1">
              <h4 class="mb-0">產品類別</h4>
            </div>
          </div>
          <div class="card-body py-0">
            <ul v-if="categories?.length" class="sidebar-categories list-unstyled">
              <li v-for="category of categories" :key="category" class="categories-item">
                <a
                  href="#"
                  class="py-2 d-block text-muted"
                  :class="{
                    active:
                      category === '所有產品'
                        ? '' === products.pagination.category
                        : category === products.pagination.category
                  }"
                  @click.prevent="
                    getProductList(1, `${category}`);
                    onClickProductList();
                  "
                  >{{ category }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Product List -->
      <div class="col-md-8">
        <div v-if="products.products.length" class="product-list row">
          <div v-for="product in products.products" :key="product.id" class="col-md-6">
            <div class="card rounded-0 mb-4">
              <div class="card-body text-start rounded-0 p-2">
                <div class="card-img-wrapper position-relative mb-2">
                  <a href="#" class="stretched-link" @click.prevent="gotToProduct(product)">
                    <img
                      class="card-img rounded-0"
                      :src="product?.imagesUrl[0]"
                      :alt="product.title"
                  /></a>
                </div>
                <div class="card-text row">
                  <h6 class="card-title col-12">{{ product.title }}</h6>
                  <div class="col-12 d-flex justify-content-between">
                    <p class="card-text fs-6 pt-1 mb-0">{{ numberToNTD(product?.price) }}</p>
                    <button
                      type="button"
                      class="btn btn-find-more btn-sm btn-primary text-white"
                      :disabled="isLoading"
                      @click.prevent="openModal('findMore', product)"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <PaginationComponent
            ref="paginationComponentRef"
            :pagination="products?.pagination"
            @change-page="getProductList"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <FindMoreModal ref="findMoreModalRef" :temp-product="tempProduct" :add-to-cart="addToCart" />
  <!-- Modal -->
  <!--  Loading Component-->
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>

<style scoped lang="scss">
@import '@/assets/all.scss';
.product-list {
  .card {
    height: 240px;

    &-img {
      object-fit: cover;
      height: 160px;
    }

    @include media-breakpoint-up(md) {
      height: 320px;
      &-img {
        height: 240px;
      }
    }
  }
}
.active {
  font-weight: bold;
  color: $primary-heavy !important;
}
</style>
