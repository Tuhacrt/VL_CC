<script setup lang="ts">
import { ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { Form } from 'vee-validate';
import { storeToRefs } from 'pinia';

import type { UserForm, User } from '@/types';
import { useCartStore } from '@/stores/cartStore';
import { useLoadingStore } from '@/stores/loadingStore';

const { VITE_URL, VITE_PATH } = import.meta.env;
const formRef = ref<typeof Form>();

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const cartStore = useCartStore();
const { getCart, updateCart, deleteAllCarts, deleteCartItem } = cartStore;
const { carts } = storeToRefs(cartStore);

const form = ref<UserForm>({
  user: {} as User,
  message: '' as string
});

const createOrder = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/order`;
  const data = form.value;
  isLoading.value = true;

  try {
    const response = await axios.post(url, { data });
    isLoading.value = false;
    formRef.value?.resetForm();
    alert(response.data.message);
    getCart();
  } catch (err: unknown) {
    isLoading.value = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};
</script>

<template>
  <div class="container">
    <!-- Cart -->
    <div class="mt-4">
      <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          :disabled="!carts?.carts?.length"
          @click="deleteAllCarts"
        >
          清空購物車
        </button>
      </div>
      <div v-if="!carts?.carts?.length" class="h1 text-white font-weight-bold bg-dark">
        購物車是空的喔！
      </div>
      <table v-else class="table align-middle">
        <thead>
          <tr>
            <th />
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="carts?.carts">
            <tr v-for="item in carts.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  :disabled="isLoading"
                  @click="deleteCartItem(item.id)"
                >
                  <div>移除購物車</div>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div v-if="item.product.price < item.product.origin_price" class="text-success">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input
                      v-model.number="item.qty"
                      aria-label="qty-input"
                      min="1"
                      type="number"
                      class="form-control"
                      :disabled="isLoading"
                      @change="updateCart(item)"
                    />
                    <span id="basic-addon2" class="input-group-text">{{ item.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small v-if="item.product.price < item.product.origin_price" class="text-success"
                  >折扣價：{{ item.final_total }}</small
                >
                <small v-else>{{ item.total }}</small>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr v-if="carts.final_total < carts.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">
              {{ carts.final_total }}
            </td>
          </tr>
          <tr v-else>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">
              {{ carts.total }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- Cart -->

    <!-- Form -->
    <div class="my-5 row justify-content-center">
      <Form ref="formRef" v-slot="{ errors }" class="col-md-6" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            v-model="form.user.email"
            name="email"
            label="Email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            placeholder="請輸入 Email"
            rules="required|email"
          />
          <ErrorMessage name="email" class="invalid-feedback" />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            v-model="form.user.name"
            name="name"
            label="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
            placeholder="請輸入姓名"
            rules="required"
          />
          <ErrorMessage name="name" class="invalid-feedback" />
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            v-model="form.user.tel"
            name="tel"
            label="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors.tel }"
            placeholder="請輸入電話"
            rules="required|min:8|max:10"
          />
          <ErrorMessage name="tel" class="invalid-feedback" />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            v-model="form.user.address"
            name="address"
            label="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.address }"
            placeholder="請輸入地址"
            rules="required"
          />
          <ErrorMessage name="address" class="invalid-feedback" />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <Field
            id="message"
            v-model="form.message"
            name="message"
            as="textarea"
            class="form-control"
            cols="30"
            rows="10"
          />
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger" :disabled="!carts?.total || isLoading">
            送出訂單
          </button>
        </div>
      </Form>
    </div>
    <!-- Form -->
  </div>
  <!--  Loading Component-->
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>
