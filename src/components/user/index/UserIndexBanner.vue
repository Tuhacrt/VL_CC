<template>
  <div class="banner container-fluid p-0 p-md-2">
    <div class="banner-picture">
      <div class="banner-picture-set">
        <img src="@/images/vl_wild_cat.jpg" class="img-fluid w-100 pb-2" alt="wild cat" />
        <img src="@/images/vl_sunflower.jpg" class="img-fluid w-100 pb-2" alt="sunflower" />
      </div>
    </div>
    <div class="banner-title p-x-2 py-4 mb-2">
      <h1 class="fw-bold">VL & CC</h1>
      <h2>凝結每一個美好瞬間</h2>
      <p>search component</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-picture-set {
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
}
.banner-title {
  background-color: #ebe5df;
  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
  }
}
</style>
