<script setup lang="ts">
import UserNavbar from '@/components/Uesr/UserNavbar.vue';
</script>
<template>
  <UserNavbar></UserNavbar>
  <div class="container mx-auto">
    <!-- <nav class="d-flex justify-content-evenly mx-auto" style="width: 700px">
      <router-link to="/"> Home Page </router-link>
      <router-link to="/products"> Products </router-link>
      <router-link to="/cart"> Cart </router-link>
      <router-link to="/admin/products"> Dashboard </router-link>
    </nav> -->
    <router-view />
  </div>
</template>
