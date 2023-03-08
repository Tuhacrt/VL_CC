<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const store = useCartStore();
const { carts } = storeToRefs(store);
const { getCart } = store;

onMounted(() => {
  getCart();
});
</script>

<template>
  <span
    v-if="carts?.carts.length"
    class="cart-store position-absolute translate-middle p-1 border border-light rounded-circle text-white"
  >
    {{ carts?.carts.length }}
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
  top: 50%;
  left: 60%;
  @include media-breakpoint-up(md) {
    left: 66%;
  }
}
</style>
