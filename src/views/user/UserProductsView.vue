<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'vue-router';

import FindMoreModal from '@/components/Uesr/UserFindMoreModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import type { Product, Pagination } from '@/types';

const { VITE_URL, VITE_PATH } = import.meta.env;

const state = reactive({
  products: [] as Product[],
  pagination: {} as Pagination,
  tempProduct: {
    imagesUrl: [] as string[]
  } as Product,
  isLoading: false as boolean
});

const router = useRouter();

const findMoreModalRef = ref<typeof FindMoreModal>();

const getProductList = async (currentPage: number = state.pagination.current_page || 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/products?page=${currentPage}`;
  state.isLoading = true;

  try {
    const response = await axios.get(url);
    state.isLoading = false;
    state.products = response.data.products;
    state.pagination = response.data.pagination;
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const addToCart = async (productId: string, quantity = 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
  const data = { product_id: productId, qty: quantity };
  state.isLoading = true;

  try {
    const response = await axios.post(url, { data });
    state.isLoading = false;
    findMoreModalRef.value?.hideModal();
    alert(response.data.message);
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

onMounted(() => {
  getProductList();
});

const openModal = (modalType: string, currentProduct: Product) => {
  switch (modalType) {
    case 'findMore':
      state.tempProduct = { ...currentProduct } as Product;
      findMoreModalRef.value?.showModal();
      break;
    default:
      break;
  }
};

const goToAbout = async (currentProduct: Product) => {
  const { id } = currentProduct;
  const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;
  state.tempProduct = { ...currentProduct } as Product;
  state.isLoading = true;

  try {
    await axios.get(url);
    state.isLoading = false;
    router.push(`/product/${id}`);
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};
</script>

<template>
  <div class="container">
    <!-- Product List -->
    <div class="mt-4">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th />
          </tr>
        </thead>
        <tbody v-if="state.products?.length">
          <tr v-for="product in state?.products" :key="product.id">
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
                <div class="h5">現在只要 {{ product.price }} 元</div>
              </div>
              <div v-else class="h5">{{ product.origin_price }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  :disabled="state.isLoading"
                  @click="goToAbout(product)"
                >
                  詳細希望
                </button>

                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  :disabled="state.isLoading"
                  @click="openModal('findMore', product)"
                >
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  :disabled="state.isLoading"
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
    <!-- Product List -->
    <!-- Pagination -->
    <div class="d-flex justify-content-center">
      <PaginationComponent
        ref="paginationComponentRef"
        :pagination="state.pagination"
        @change-page="getProductList"
      />
    </div>
    <!-- Pagination -->
  </div>
  <!-- Modal -->
  <FindMoreModal
    ref="findMoreModalRef"
    :temp-product="state.tempProduct"
    :add-to-cart="addToCart"
  />
  <!-- Modal -->
  <!--  Loading Component-->
  <Loading v-model:active="state.isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>
