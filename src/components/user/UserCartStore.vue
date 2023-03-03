<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
</script>
<template>
  <span
    class="cart-store position-absolute top-50 translate-middle p-1 border border-light rounded-circle text-white"
  >
    <span class="visually-hidden"></span>
  </span>
</template>
<style lang="scss" scoped>
@import '@/assets/all.scss';
.cart-store {
  width: 28px;
  height: 28px;
  font-size: 12px;
  background-color: #ce9d7b;
  left: 62%;
  @include media-breakpoint-up(md) {
    left: 65%;
  }
}
</style>
