<script setup lang="ts">
import { ref, computed, watch, toRef } from 'vue';
import type { Pagination } from '@/types';

const props = defineProps<{ pagination: Pagination }>();
const emit = defineEmits<{ (e: 'change-page', nextPage: number, currCategory: string): void }>();
const paginationComponentRef = ref<HTMLDivElement | string>('');
const localPagination = toRef(props, 'pagination');
const totalItems = computed<number>(() => localPagination.value.total_pages * 10);
const currentPage = ref<number>(1);

watch(localPagination, (newVal) => {
  currentPage.value = newVal.current_page;
});

const onClickPage = (
  nextPage: number = localPagination.value.current_page || 1,
  nextCategory: string = localPagination.value.category || ''
) => {
  window.scrollTo({ top: 300, behavior: 'smooth' });
  emit('change-page', nextPage, nextCategory);
};
</script>

<template>
  <div ref="paginationComponentRef" class="pagination-component">
    <vue-awesome-paginate
      v-model="currentPage"
      :total-items="totalItems"
      :item-per-page="10"
      :on-click="onClickPage"
    >
      <template #prev-button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0d6efd"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>

      <template #next-button>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0d6efd"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </span>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<style scoped lang="scss">
.pagination-component :deep() {
  .paginate-buttons {
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: #e6e6e6;
    border: none;
  }
  .back-button,
  .next-button {
    margin-inline: 10px;
    border-radius: 25px;
  }
  .first-button {
    border-start-start-radius: 25px;
    border-end-start-radius: 25px;
  }
  .last-button {
    border-start-end-radius: 25px;
    border-end-end-radius: 25px;
  }
  .back-button svg {
    transform: rotate(180deg) translateY(1px);
  }
  .next-button svg {
    transform: translateY(-1px);
  }
  li:nth-child(2) > .paginate-buttons.number-buttons {
    border-start-start-radius: 25px;
    border-end-start-radius: 25px;
    transition: none;
  }
  li:nth-last-child(2) > .paginate-buttons.number-buttons {
    border-start-end-radius: 25px;
    border-end-end-radius: 25px;
  }
  .active-page {
    background-color: #0d6efd;
    color: #fff;
  }
  .paginate-buttons:hover {
    background-color: #f5f5f5;
  }
  .active-page:hover {
    background-color: #0d6efd;
  }
  .back-button:active,
  .next-button:active {
    background-color: #e6e6e6;
  }
}
</style>
