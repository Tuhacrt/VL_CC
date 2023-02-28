<script setup lang="ts">
import { ref, toRef, computed, watch } from 'vue';
import { Field, Form } from 'vee-validate';
import { formatTimeToDate, formatDateToTime } from '@/utils/useDate';
import useModal from '@/utils/useModal';
import type { Coupon } from '@/types';

const props = defineProps<{ tempCoupon: Coupon }>();
const emit = defineEmits(['update-coupon']) // eslint-disable-line
const couponData = toRef(props, 'tempCoupon');
const couponModalRef = ref<HTMLDivElement | string>('');
const { modal, showModal } = useModal(couponModalRef);
const dueDate = ref<string>('');
const minDate = computed(() => formatTimeToDate(Date.now() / 1e3, '-'));
const formRef = ref<typeof Form>();

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

const hideModal = () => {
  formRef.value?.resetForm();
  modal.value?.hide();
};

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
    <Form
      ref="formRef"
      v-slot="{ errors }"
      class="modal-dialog modal-xl"
      role="document"
      @submit.prevent="$emit('update-coupon', couponData)"
    >
      <div class="modal-content bcoupon-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>新增優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            aria-label="Close"
            @click="hideModal"
          />
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <Field
              id="title"
              v-model="couponData.title"
              name="title"
              label="標題"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.title }"
              placeholder="請輸入標題"
              rules="required"
            />
            <ErrorMessage name="title" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <Field
              id="coupon_code"
              v-model="couponData.code"
              name="coupon_code"
              label="優惠碼"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.coupon_code }"
              placeholder="請輸入優惠碼"
              rules="required|min:4|max:12"
            />
            <ErrorMessage name="coupon_code" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <Field
              id="due_date"
              v-model="dueDate"
              name="due_date"
              label="到期日"
              type="date"
              class="form-control"
              :class="{ 'is-invalid': errors.due_date }"
              rules="required"
              :min="minDate"
            />
            <ErrorMessage name="due_date" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="discount" class="form-label">折扣百分比</label>
            <Field
              id="discount"
              v-model.number="couponData.percent"
              type="number"
              class="form-control"
              name="discount"
              label="折扣百分比"
              :class="{ 'is-invalid': errors.discount }"
              placeholder="請輸入折扣百分比"
              min="1"
              max="100"
              rules="required|min_value:1|max_value:100"
            />
            <ErrorMessage name="discount" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <label class="form-check-label" for="is_enabled"> 是否啟用 </label>
              <Field
                id="is_enabled"
                v-model="couponData.is_enabled"
                name="is_enabled"
                label="是否啟用"
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                rules="required"
              />
              <ErrorMessage name="is_enabled" class="invalid-feedback" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" @click="hideModal">取消</button>
            <button type="submit" class="btn btn-primary">確認</button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>
