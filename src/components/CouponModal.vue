<script setup lang="ts">
import { ref, toRef, computed, watch } from 'vue';
import { formatTimeToDate, formatDateToTime } from '@/utils/useDate';
import useModal from '@/utils/useModal';
import type { Coupon } from '@/types';

const props = defineProps<{ tempCoupon: Coupon }>();
const emit = defineEmits(['update-coupon']) // eslint-disable-line
const couponData = toRef(props, 'tempCoupon');
const couponModalRef = ref<HTMLDivElement | string>('');
const { modal, showModal, hideModal } = useModal(couponModalRef) // eslint-disable-line
const dueDate = ref<string>('');
const minDate = computed(() => formatTimeToDate(Date.now() / 1e3, '-'));

watch(dueDate, (newVal) => {
  couponData.value.due_date = formatDateToTime(newVal);
});

watch(
  couponData,
  (newVal) => {
    dueDate.value = formatTimeToDate(newVal.due_date || Date.now() / 1e3, '-');
  },
  { immediate: true }
);

defineExpose({ showModal, hideModal });
</script>
<template>
  <div
    id="couponModal"
    ref="couponModalRef"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content bcoupon-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>新增優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              id="title"
              v-model="couponData.title"
              type="text"
              class="form-control"
              placeholder="請輸入標題"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              id="coupon_code"
              v-model="couponData.code"
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input
              id="due_date"
              v-model="dueDate"
              :min="minDate"
              type="date"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              id="price"
              v-model.number="couponData.percent"
              type="number"
              class="form-control"
              min="0"
              placeholder="請輸入折扣百分比"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                id="is_enabled"
                v-model="couponData.is_enabled"
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
              />
              <label class="form-check-label" for="is_enabled"> 是否啟用 </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('update-coupon', couponData)">
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
