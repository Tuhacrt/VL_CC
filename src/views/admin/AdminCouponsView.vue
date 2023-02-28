<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import axios, { AxiosError } from 'axios';

import CouponModal from '@/components/Admin/AdminCouponModal.vue';
import DeleteModal from '@/components/Admin/AdminDeleteModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import { formatTimeToDate } from '@/utils/useDate';
import type { Coupon, Pagination } from '@/types';

const { VITE_URL, VITE_PATH, VITE_TEXT } = import.meta.env;

const state = reactive({
  coupons: [] as Coupon[],
  pagination: {} as Pagination,
  tempCoupon: {} as Coupon,
  isNew: false as boolean,
  isLoading: false as boolean
});

const couponModalRef = ref<typeof CouponModal>();
const deleteModalRef = ref<typeof DeleteModal>();

const getCouponList = async (currentPage: number = state.pagination.current_page || 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/coupons/?page=${currentPage}`;
  state.isLoading = true;

  try {
    const response = await axios.get(url);
    state.isLoading = false;
    state.coupons = response.data.coupons;
    state.pagination = response.data.pagination;
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

onMounted(() => {
  getCouponList();
});

const getRequestType = () => {
  const baseURL = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`;
  const url: string = state.isNew ? baseURL : `${baseURL}/${state.tempCoupon.id}`;
  const method: 'post' | 'put' = state.isNew ? 'post' : 'put';
  return { method, url };
};

const updateCoupon = async () => {
  const { method, url } = getRequestType();
  state.isLoading = true;

  try {
    await axios[method](url, {
      data: state.tempCoupon
    });
    couponModalRef.value?.hideModal();
    getCouponList();
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const deleteCoupon = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${state.tempCoupon.id}`;
  state.isLoading = true;

  try {
    await axios.delete(url);
    deleteModalRef.value?.hideModal();
    getCouponList();
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

/*eslint-disable */
const deleteAllCoupons = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/coupons/all`
  state.isLoading = true

  try {
    await axios.delete(url)
    getCouponList()
  } catch (err: unknown) {
    state.isLoading = false
    if (err instanceof AxiosError) alert(err.response?.data.message)
  }
}
/*eslint-disable*/

const openModal = (modalType: string, currentCoupon: Coupon = {} as Coupon) => {
  switch (modalType) {
    case 'new':
      state.tempCoupon = { due_date: Date.now() / 1e3, is_enabled: 0 } as Coupon
      state.isNew = true
      couponModalRef.value?.showModal()
      break
    case 'edit':
      state.tempCoupon = { ...currentCoupon } as Coupon
      state.isNew = false
      couponModalRef.value?.showModal()
      break
    case 'delete':
      state.tempCoupon = { ...currentCoupon } as Coupon
      deleteModalRef.value?.showModal()
      break
    default:
      break
  }
}
</script>

<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('new')">建立新的優惠券</button>
    </div>
    <!-- Product List -->
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">名稱</th>
          <th>折扣百分比</th>
          <th width="120">到期日</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody v-if="state.coupons?.length">
        <tr v-for="coupon in state.coupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}</td>
          <td class="text-end">
            {{ formatTimeToDate(coupon?.due_date) }}
          </td>
          <td>
            <span :class="{ 'text-success': coupon.is_enabled }">{{
              coupon.is_enabled ? '啟用' : '未啟用'
            }}</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', coupon)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', coupon)">
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
        @change-page="getCouponList"
      />
    </div>
    <!-- Pagination -->

    <div class="text-center">
      <p>{{ VITE_TEXT }}</p>
    </div>
  </div>

  <!-- Modal -->
  <CouponModal
    ref="couponModalRef"
    :temp-coupon="state.tempCoupon"
    :is-new="state.isNew"
    @update-coupon="updateCoupon"
  />
  <DeleteModal ref="deleteModalRef" :delete-item="state.tempCoupon" @delete-item="deleteCoupon" />
  <!-- Modal -->
  <!--  Loading Component-->
  <Loading v-model:active="state.isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>
