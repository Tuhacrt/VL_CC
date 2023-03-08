<script setup lang="ts">
import UserIndexBanner from '@/components/user/index/UserIndexBanner.vue';
import UserIndexIntro from '@/components/user/index/UserIndexIntro.vue';
import UserIndexRecommendNews from '@/components/user/UserRecommendNews.vue';
import UserMayLike from '@/components/user/UserMayLike.vue';
import { storeToRefs } from 'pinia';
import { useLoadingStore } from '@/stores/loadingStore';

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
</script>
<template>
  <UserIndexBanner />
  <UserIndexIntro />
  <UserIndexRecommendNews />
  <UserMayLike />
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
</template>
