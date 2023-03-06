<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Collapse } from 'bootstrap';
import UserCartCouterIcon from './UserCartCouterIcon.vue';

const collapseRef = ref<HTMLDivElement | string>('');
const collapse = ref<Collapse | null>(null);
const router = reactive(useRouter());

onMounted(() => {
  collapse.value = new Collapse(collapseRef.value, { toggle: false });
});

watch(router, () => {
  collapse.value?.hide();
});
</script>

<template>
  <nav class="navbar container-fluid sticky-top navbar-expand-md">
    <div class="container d-flex py-1 py-2-md">
      <div id="navbar-logo" class="ps-2 ps-sm-0">
        <router-link to="/" class="navbar-brand fs-2" style="color: #2c3e50"> VL & CC </router-link>
      </div>
      <button
        class="navbar-toggler border-0 p-sm-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-router"
        aria-controls="navbar-router"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="fas fa-bars" class="fs-1"></font-awesome-icon>
      </button>
      <div
        id="navbar-router"
        ref="collapseRef"
        class="navbar-text justify-content-end collapse navbar-collapse"
      >
        <ul class="navbar-nav pt-2">
          <router-link to="/" class="pe-0 pe-md-5"> 最新消息 </router-link>
          <router-link to="/products" class="pe-0 pe-md-5"> 所有產品 </router-link>
          <router-link to="/cart" class="pe-0 pe-md-5 position-relative">
            購物車 <UserCartCouterIcon />
          </router-link>
          <router-link to="/admin/products" class="pe-0 pe-md-0"> 後檯介面 </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #fff;

  a {
    font-weight: bold;
    color: #2c3e50;
    &router-link-exact-active {
      color: #9e5d30;
    }
  }

  button {
    color: #eee;
  }
  .fa-bars {
    color: #ce9d7b;
  }
}
</style>
