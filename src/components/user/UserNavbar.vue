<template>
  <nav class="navbar container-fluid sticky-top navbar-expand-md">
    <div class="container d-flex py-1 py-2-md">
      <div id="navbar-logo" class="ps-2 ps-sm-0">
        <router-link to="/" class="navbar-brand fs-2" style="color: #2c3e50"> VL & CC </router-link>
      </div>
      <div id="navbar-menu" class="pe-3 pe-sm-0">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-router"
          aria-controls="navbar-router"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbar-router" class="navbar-text justify-content-end collapse navbar-collapse">
          <ul class="navbar-nav pt-2">
            <router-link to="/" class="ps-5"> 最新消息 </router-link>
            <router-link to="/products" class="ps-5"> 所有產品 </router-link>
            <router-link to="/cart" class="ps-5"> 購物車 </router-link>
            <router-link to="/admin/products" class="ps-5"> 後檯介面 </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #ffffff;
}
</style>
