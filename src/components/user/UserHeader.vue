<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Collapse } from 'bootstrap';

import UserCartCounterIcon from './UserCartCounterIcon.vue';

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
  <nav class="navbar container-fluid sticky-top navbar-expand-md bg-white">
    <div class="container d-flex py-1 py-2-md position-relative">
      <div id="navbar-logo" class="ps-2 ps-sm-0">
        <router-link to="/" class="navbar-brand fs-2"> VL & CC </router-link>
      </div>
      <button
        class="navbar-toggler border-0 p-sm-0 position-relative"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-router"
        aria-controls="navbar-router"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="fas fa-bars" class="fs-1 text-primary" />
        <UserCartCounterIcon id="bars-counter" class="start-75 d-block d-md-none" />
      </button>
      <div
        id="navbar-router"
        ref="collapseRef"
        class="collapse navbar-collapse navbar-text justify-content-end"
      >
        <div class="collapseRef pt-2">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="d-block pe-0 pe-md-5 text-secondary hover-primary" to="/">
                最新消息
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="pe-0 pe-md-5"> 所有產品 </router-link>
            </li>
            <li class="nav-item position-relative">
              <router-link to="/cart" class="pe-0 pe-md-5">
                購物車 <UserCartCounterIcon />
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/products" class="pe-0 pe-md-0"> 後檯介面 </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/all.scss';
a {
  font-weight: bold;
}
.collapseRef {
  .active {
    color: $primary !important;
  }
  a {
    &:hover {
      color: $primary-heavy !important;
    }
  }
}
#bars-counter {
  width: 24px;
  height: 24px;
  font-size: 10px;
  top: 20% !important;
  @include media-breakpoint-up(sm) {
    left: 100% !important;
  }
}
</style>
