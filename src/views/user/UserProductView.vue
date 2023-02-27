<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import axios, { AxiosError } from 'axios';

import { useRoute } from 'vue-router';
import type { Product } from '@/types';

const { VITE_URL, VITE_PATH } = import.meta.env;
const route = useRoute();

const state = reactive({
  product: {} as Product,
  isLoading: false as boolean
});
let quantity = 1;

const getProduct = async () => {
  const { id } = route.params;
  const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;
  state.isLoading = true;

  try {
    const response = await axios.get(url);
    state.isLoading = false;
    state.product = response.data.product;
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const addToCart = async (productId: string, productQuantity = 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
  const data = { product_id: productId, qty: productQuantity };
  state.isLoading = true;

  try {
    const response = await axios.post(url, { data });
    state.isLoading = false;
    quantity = 1;
    alert(response.data.message);
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

onMounted(() => {
  getProduct();
});
</script>

<template>
  <div class="container">
    <div class="about">
      <h1>{{ state.product.title }}</h1>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-6">
            <img
              v-if="state.product?.imagesUrl"
              class="img-fluid"
              :src="state.product?.imagesUrl[0]"
              alt=""
            />
          </div>
          <div class="col-sm-6">
            <span class="badge bg-primary rounded-pill">{{ state.product.category }}</span>
            <p>商品描述：{{ state.product.description }}</p>
            <p>商品內容：{{ state.product.content }}</p>
            <div v-if="state.product.price < state.product.origin_price" class="h5">
              {{ state.product.origin_price }} 元
            </div>
            <div v-else>
              <del class="h6">原價 {{ state.product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ state.product.price }} 元</div>
            </div>
            <div>
              <div class="input-group">
                <input
                  v-model.number="quantity"
                  aria-label="quantity-input"
                  min="1"
                  type="number"
                  class="form-control"
                />
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addToCart(state.product.id, quantity)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <!-- col-sm-6 end -->
        </div>
      </div>
    </div>
  </div>
  <!--  Loading Component-->
  <Loading v-model:active="state.isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>
