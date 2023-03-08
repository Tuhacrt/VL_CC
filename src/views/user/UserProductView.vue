<script setup lang="ts">
import UserProductComponent from '@/components/user/UserProductComponent.vue';
import UserMayLike from '@/components/user/UserMayLike.vue';
import { storeToRefs } from 'pinia';
import { useLoadingStore } from '@/stores/loadingStore';

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
</script>

<template>
  <UserProductComponent />
  <UserMayLike />
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
</template>
