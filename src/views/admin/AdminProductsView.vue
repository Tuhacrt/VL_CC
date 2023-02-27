<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import axios, { AxiosError } from 'axios';

import ProductModal from '@/components/ProductModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import type { Product, Pagination } from '@/types';

const { VITE_URL, VITE_PATH, VITE_TEXT } = import.meta.env;

const state = reactive({
  products: [] as Product[],
  pagination: {} as Pagination,
  tempProduct: {} as Product,
  isNew: false as boolean,
  isLoading: false as boolean
});

const productModalRef = ref<typeof ProductModal>();
const deleteModalRef = ref<typeof DeleteModal>();

const getProductList = async (currentPage: number = state.pagination.current_page || 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/products/?page=${currentPage}`;
  state.isLoading = true;

  try {
    const response = await axios.get(url);
    state.isLoading = false;
    state.products = response.data.products;
    state.pagination = response.data.pagination;
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

onMounted(() => {
  getProductList();
});

const getRequestType = (): { method: 'post' | 'put'; url: string } => {
  const baseURL = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
  const url: string = state.isNew ? baseURL : `${baseURL}/${state.tempProduct.id}`;
  const method: 'post' | 'put' = state.isNew ? 'post' : 'put';
  return { method, url };
};

const updateProduct = async () => {
  const { method, url } = getRequestType();
  state.isLoading = true;

  try {
    await axios[method](url, {
      data: state.tempProduct
    });
    productModalRef.value?.hideModal();
    // alert(response.data.message);
    getProductList();
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const deleteProduct = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${state.tempProduct.id}`;
  state.isLoading = true;

  try {
    await axios.delete(url);
    deleteModalRef.value?.hideModal();
    getProductList();
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const openModal = (modalType: string, currentProduct: Product = {} as Product) => {
  switch (modalType) {
    case 'new':
      state.tempProduct = { imagesUrl: [] as string[] } as Product;
      state.isNew = true;
      productModalRef.value?.showModal();
      break;
    case 'edit':
      state.tempProduct = { ...currentProduct } as Product;
      state.isNew = false;
      productModalRef.value?.showModal();
      break;
    case 'delete':
      state.tempProduct = { ...currentProduct } as Product;
      deleteModalRef.value?.showModal();
      break;
    default:
      break;
  }
};
</script>

<template>
  <div class="container">
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="openModal('new')">建立新的產品</button>
    </div>
    <!-- Product List -->
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody v-if="state.products?.length">
        <tr v-for="product in state.products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">
            {{ product.origin_price }}
          </td>
          <td class="text-end">
            {{ product.price }}
          </td>
          <td>
            <span :class="{ 'text-success': product.is_enabled }">{{
              product.is_enabled ? '啟用' : '未啟用'
            }}</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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

    <div class="text-center">
      <p>{{ VITE_TEXT }}</p>
    </div>
  </div>

  <!-- Modal -->
  <ProductModal
    ref="productModalRef"
    :temp-product="state.tempProduct"
    :is-new="state.isNew"
    @update-product="updateProduct"
  />
  <DeleteModal ref="deleteModalRef" :delete-item="state.tempProduct" @delete-item="deleteProduct" />
  <!-- Modal -->
  <!--  Loading Component-->
  <Loading v-model:active="state.isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>
