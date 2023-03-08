<script setup lang="ts">
import UserHeader from '@/components/user/UserHeader.vue';
import UserFooter from '@/components/user/UserFooter.vue';
</script>
<template>
  <div class="container-fluid p-0 bg-background">
    <UserHeader />
    <router-view />
    <UserFooter />
  </div>
</template>
