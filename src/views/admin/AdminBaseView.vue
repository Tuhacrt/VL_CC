<script setup lang="ts">
import AdminNavbar from '@/components/admin/AdminNavbar.vue';
</script>

<template>
  <a-layout has-sider>
    <AdminNavbar />
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-content data-theme="light">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
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
