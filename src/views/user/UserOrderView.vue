<script setup lang="ts">
import { ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { Form } from 'vee-validate';
import { storeToRefs } from 'pinia';

import type { UserForm, User } from '@/types';
import { useCartStore } from '@/stores/cartStore';
import { useLoadingStore } from '@/stores/loadingStore';
import { useRouter } from 'vue-router';

const { VITE_URL, VITE_PATH } = import.meta.env;
const formRef = ref<typeof Form>();
const router = useRouter();

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const cartStore = useCartStore();
const { getCart } = cartStore;
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
    router.push('/');
  } catch (err: unknown) {
    isLoading.value = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};
</script>

<template>
  <div class="container">
    <div class="my-5 row justify-content-center">
      <h5 class="text-center">填寫訂購表單</h5>
      <div class="my-5 w-75">
        <div class="position-relative m-4">
          <div class="progress">
            <div
              class="progress-bar w-50"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <button
            type="button"
            class="progress-bar-button position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill text-white"
          >
            商品確認
          </button>
          <button
            type="button"
            class="progress-bar-button position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill text-white"
          >
            表單填寫
          </button>
          <button
            type="button"
            class="progress-bar-button position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
          >
            訂購完成
          </button>
        </div>
      </div>
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
          <button type="submit" class="btn btn-success" :disabled="!carts?.total || isLoading">
            送出訂單
          </button>
        </div>
      </Form>
    </div>
  </div>
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
</template>

<style scoped lang="scss">
@import '@/assets/all.scss';
.progress {
  height: 1px;
  background-color: $secondary;
  &-bar-button {
    width: 6rem;
    height: 2rem;
  }
}
</style>
