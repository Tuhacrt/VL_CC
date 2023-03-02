<script setup lang="ts">
import UserNavbar from '@/components/user/UserNavbar.vue';
import UserFooter from '@/components/user/UserFooter.vue';
</script>
<template>
  <div class="container-fluid p-0">
    <UserNavbar></UserNavbar>
    <router-view />
    <UserFooter></UserFooter>
  </div>
</template>
