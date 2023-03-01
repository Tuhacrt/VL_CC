<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios, { AxiosError } from 'axios';

const { VITE_URL, VITE_TOKEN } = import.meta.env;
const route = useRoute();
const router = useRouter();
const currentPage = ref<string[]>([route.path]);

const logout = async () => {
  const url = `${VITE_URL}/logout`;

  try {
    const response = await axios.post(url);
    if (response.data.success) {
      alert(response.data.message);
      document.cookie = `${VITE_TOKEN}=; expires=${new Date(0)};`;
      router.push('/');
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};
</script>

<template>
  <nav>
    <a-layout-sider
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0
      }"
    >
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="currentPage"
        theme="dark"
        mode="inline"
        style="padding-top: 40px"
      >
        <a-menu-item key="/admin/products">
          <router-link to="/admin/products" style="text-decoration: none; color: inherit">
            Admin Products
          </router-link>
        </a-menu-item>
        <a-menu-item key="/admin/orders">
          <router-link to="/admin/orders" style="text-decoration: none; color: inherit">
            Admin Orders
          </router-link>
        </a-menu-item>
        <a-menu-item key="/admin/coupons">
          <router-link to="/admin/coupons" style="text-decoration: none; color: inherit">
            Admin Coupons
          </router-link>
        </a-menu-item>
        <a-menu-item key="/">
          <router-link to="/" style="text-decoration: none; color: inherit">Front Page</router-link>
        </a-menu-item>
        <a-menu-item key="/logout">
          <router-link to="/" style="text-decoration: none; color: inherit" @click.prevent="logout"
            >Logout</router-link
          >
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </nav>
</template>

<style scoped>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
