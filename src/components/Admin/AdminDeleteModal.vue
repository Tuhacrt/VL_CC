<script setup lang="ts">
import { ref } from 'vue';
import useModal from '@/utils/useModal';
import type { Product, Order, Coupon } from '@/types';

const props = defineProps<{ deleteItem: Product | Order | Coupon }>() // eslint-disable-line
const emit = defineEmits(['delete-item']) // eslint-disable-line
const deleteProductModalRef = ref<HTMLDivElement | string>('');
const { showModal, hideModal } = useModal(deleteProductModalRef);

defineExpose({ showModal, hideModal });
</script>

<template>
  <div
    id="deleteProductModal"
    ref="deleteProductModalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            aria-label="Close"
            @click="hideModal"
          />
        </div>
        <div class="modal-body">
          是否刪除
          <strong v-if="'title' in deleteItem" class="text-danger">{{ deleteItem?.title }}</strong>
          <strong v-if="'user' in deleteItem" class="text-danger">{{
            deleteItem?.user.email
          }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="hideModal">取消</button>
          <button type="button" class="btn btn-danger" @click="$emit('delete-item')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
