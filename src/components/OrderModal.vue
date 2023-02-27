<script setup lang="ts">
import { ref, toRef } from 'vue';
import { formatTimeToDate } from '@/utils/useDate';
import useModal from '@/utils/useModal';
import type { Order } from '@/types';

const props = defineProps<{ tempOrder: Order; isPaid: boolean }>();
const emit = defineEmits(['update-paid']) // eslint-disable-line
const orderData = toRef(props, 'tempOrder');
const orderModalRef = ref<HTMLDivElement | string>('');
const { modal, showModal, hideModal } = useModal(orderModalRef) // eslint-disable-line

defineExpose({ showModal, hideModal });
</script>
<template>
  <div
    id="orderModal"
    ref="orderModalRef"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="orderData.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ orderData.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ orderData.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ orderData.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ orderData.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ orderData.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>
                      {{ formatTimeToDate(orderData?.create_at) }}
                    </td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="orderData?.paid_date">
                        {{ formatTimeToDate(orderData?.paid_date) }}
                      </span>
                      <span v-else>尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="orderData.is_paid" class="text-success">已付款</strong>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ orderData.total }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in orderData.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">
                      {{ item.final_total }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    id="flexCheckDefault"
                    v-model="orderData.is_paid"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="orderData.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('update-paid', orderData)">
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
