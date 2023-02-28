<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios, { AxiosError } from 'axios';
import router from '@/router';

const { VITE_URL } = import.meta.env;

const route = useRoute();
const currentPage = ref<string[]>([route.path]);

const logout = async () => {
  const url = `${VITE_URL}/logout`;

  try {
    const response = await axios.post(url);
    if (response.data.success) {
      alert(response.data.message);
      router.push('/');
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};
</script>

<template>
  <nav class="container">
    <div id="logo"></div>
    <div id="nav-router">
      <router-link to="/"> 最新消息 </router-link>
      <router-link to="/products"> 所有產品 </router-link>
      <router-link to="/cart"> 購物車 </router-link>
      <router-link to="/admin/products"> 後檯介面 </router-link>
    </div>
  </nav>
</template>
