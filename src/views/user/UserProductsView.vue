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

const findMoreModalRef = ref<typeof FindMoreModal>();

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const productStore = useProductStore();
const { getProductList, gotToProduct } = productStore;
const { products, tempProduct, categories } = storeToRefs(productStore);
const cartStore = useCartStore();
const { addToCart } = cartStore;

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
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card border-0">
          <div
            class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
          >
            <div class="d-flex justify-content-center align-items-center pe-1">
              <h4 class="mb-0">產品類別</h4>
              <div class="border border-bottom border-primary"></div>
            </div>
          </div>
          <div class="card-body py-0">
            <ul v-if="categories?.length" class="sidebar-categories list-unstyled">
              <li v-for="category of categories" :key="category" class="categories-item">
                <a
                  href="#"
                  class="py-2 d-block text-muted"
                  @click.prevent="getProductList(1, `${category === '所有產品' ? '' : category}`)"
                  >{{ category }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Product List -->
      <div class="col-md-8">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th />
            </tr>
          </thead>
          <tbody v-if="products?.products?.length">
            <tr v-for="product in products?.products" :key="product.id">
              <td style="width: 200px">
                <div
                  v-if="product.imagesUrl"
                  style="height: 100px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${product?.imagesUrl[0]})` }"
                />
              </td>
              <td>{{ product.title }}</td>
              <td>
                <div v-if="product.price < product.origin_price">
                  <del class="h6">原價 {{ product.origin_price }} 元</del>
                  <div class="h5">{{ product.price }} 元</div>
                </div>
                <div v-else class="h5">{{ product.origin_price }} 元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    :disabled="isLoading"
                    @click="gotToProduct(product)"
                  >
                    詳細頁面
                  </button>

                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    :disabled="isLoading"
                    @click="openModal('findMore', product)"
                  >
                    查看描述
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="isLoading"
                    @click="addToCart(product.id)"
                  >
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Product List -->
    <!-- Pagination -->
    <div class="d-flex justify-content-center">
      <PaginationComponent ref="paginationComponentRef" />
    </div>
    <!-- Pagination -->
  </div>
  <!-- Modal -->
  <FindMoreModal ref="findMoreModalRef" :temp-product="tempProduct" :add-to-cart="addToCart" />
  <!-- Modal -->
  <!--  Loading Component-->
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>
