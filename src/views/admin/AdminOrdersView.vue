<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import axios, { AxiosError } from 'axios';

import DeleteModal from '@/components/Admin/AdminDeleteModal.vue';
import OrderModal from '@/components/Admin/AdminOrderModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import { formatTimeToDate } from '@/utils/useDate';
import type { Order, Pagination } from '@/types';

const { VITE_URL, VITE_PATH } = import.meta.env;

const state = reactive({
  orders: [] as Order[],
  tempOrder: { create_at: Date.now(), is_paid: false } as Order,
  pagination: {} as Pagination,
  isLoading: false as boolean,
  isPaid: false as boolean,
  isNew: false as boolean
});

const orderModalRef = ref<typeof OrderModal>();
const deleteModalRef = ref<typeof DeleteModal>();

const getOrderList = async (currentPage: number = state.pagination.current_page || 1) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/orders/?page=${currentPage}`;
  state.isLoading = true;

  try {
    const response = await axios.get(url);
    state.isLoading = false;
    state.orders = response.data.orders;
    state.pagination = response.data.pagination;
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

onMounted(() => {
  getOrderList();
});

const updatePaid = async (order: Order) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/order/${order.id}`;
  const data = {
    ...state.tempOrder,
    is_paid: order.is_paid,
    paid_date: order.is_paid ? Math.floor(Date.now() / 1e3) : 0
  };
  state.isLoading = true;

  try {
    await axios.put(url, { data });
    orderModalRef.value?.hideModal();
    getOrderList();
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const deleteOrder = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/order/${state.tempOrder.id}`;
  state.isLoading = true;

  try {
    await axios.delete(url);
    deleteModalRef.value?.hideModal();
    getOrderList();
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

/*eslint-disable*/
const deleteAllOrders = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/orders/all`
  state.isLoading = true

  try {
    await axios.delete(url)
    getOrderList()
  } catch (err: unknown) {
    state.isLoading = false
    if (err instanceof AxiosError) alert(err.response?.data.message)
  }
}
/*eslint-disable*/

const openModal = (modalType: string, currentOrder: Order) => {
  switch (modalType) {
    case 'edit':
      state.tempOrder = { ...currentOrder } as Order
      state.isPaid = state.tempOrder.is_paid as boolean
      orderModalRef.value?.showModal()
      break
    case 'delete':
      state.tempOrder = { ...currentOrder } as Order
      deleteModalRef.value?.showModal()
      break
    default:
      break
  }
}
</script>

<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="130">購買時間</th>
          <th width="130">會員信箱</th>
          <th width="130">購買款項</th>
          <th width="130">總額</th>
          <th width="130">是否付款</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody v-if="state.orders?.length">
        <tr v-for="order in state.orders" :key="order.id">
          <td>
            {{ formatTimeToDate(order?.create_at) }}
          </td>
          <td>{{ order.user?.email }}</td>
          <td>
            <tr v-for="cart in order.products" :key="cart.id" class="d-flex justify-content-start">
              <td>
                {{ cart.product?.title }} {{ cart.qty }}
                {{ cart.product?.unit }}
              </td>
            </tr>
          </td>
          <td class="text-end">
            {{ order.total }}
          </td>
          <td>
            <div class="form-check form-switch d-flex justify-content-center">
              <input
                :id="`paidSwitch${order.id}`"
                v-model="order.is_paid"
                type="checkbox"
                class="form-check-input me-2"
                @change="updatePaid(order)"
              />
              <label class="form-check-label" :for="`paidSwitch${order.id}`">
                <span v-if="order.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', order)">
                檢視
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', order)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <div class="d-flex justify-content-center">
      <PaginationComponent
        ref="paginationComponentRef"
        :pagination="state.pagination"
        @change-page="getOrderList"
      />
    </div>
    <!-- Pagination -->
  </div>

  <!-- Modal -->
  <OrderModal
    ref="orderModalRef"
    :temp-order="state.tempOrder"
    :is-paid="state.tempOrder.is_paid"
    @update-paid="updatePaid(state.tempOrder)"
  />
  <!-- @update="getProductList" -->
  <DeleteModal ref="deleteModalRef" :delete-item="state.tempOrder" @delete-item="deleteOrder" />
  <!-- Modal -->
  <!--  Loading Component-->
  <Loading v-model:active="state.isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>
