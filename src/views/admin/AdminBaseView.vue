<script setup lang="ts">
import AdminNavbar from '@/components/admin/AdminNavbar.vue';
</script>

<template>
  <a-layout has-sider>
    <AdminNavbar />
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-content data-theme="light">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss">
body {
  background-color: #f0f2f5;
}

#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
