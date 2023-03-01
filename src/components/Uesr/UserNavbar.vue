<script setup lang="ts">
// import { ref } from 'vue';
// import { useRoute } from 'vue-router';
// import axios, { AxiosError } from 'axios';
// import router from '@/router';

// const { VITE_URL } = import.meta.env;

// const route = useRoute();
// const currentPage = ref<string[]>([route.path]);

// const logout = async () => {
//   const url = `${VITE_URL}/logout`;

//   try {
//     const response = await axios.post(url);
//     if (response.data.success) {
//       alert(response.data.message);
//       router.push('/');
//     }
//   } catch (err: unknown) {
//     if (err instanceof AxiosError) alert(err.response?.data.message);
//   }
// };
</script>

<template>
  <nav class="navbar container-fluid sticky-top navbar-expand-sm" style="background-color: #fafafa">
    <div class="container d-flex py-1 py-2-sm">
      <div id="navbar-logo">
        <router-link to="/" class="navbar-brand" style="color: #2c3e50"> VL & CC </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-router"
        aria-controls="navbar-router"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbar-router" class="navbar-text justify-content-end collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link to="/" class="ps-5"> 最新消息 </router-link>
          <router-link to="/products" class="ps-5"> 所有產品 </router-link>
          <router-link to="/cart" class="ps-5"> 購物車 </router-link>
          <router-link to="/admin/products" class="ps-5"> 後檯介面 </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
