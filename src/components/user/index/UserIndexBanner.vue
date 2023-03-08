<template>
  <div class="banner container-fluid p-0 py-md-2 d-flex">
    <div class="row m-0 p-0">
      <img
        src="@/images/vl_wild_cat.jpg"
        class="img-fluid pb-2 col-12 col-md-3 col-xl-4 px-0 pe-md-4"
        alt="wild cat"
      />
      <img
        src="@/images/vl_sunflower.jpg"
        class="img-fluid pb-2 col-12 col-md-3 col-xl-4 px-0 pe-md-4"
        alt="sunflower"
      />
      <div class="banner-title py-4 mb-2 col-12 col-md text-md-start px-md-7">
        <div class="">
          <h1 class="fw-bold">VL & CC</h1>
          <h2>凝結每一個美好瞬間</h2>
          <p>search component</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/all.scss';
.banner {
  background-color: #fafafa;
  img {
    height: 160px;
    object-fit: cover;
    @include media-breakpoint-up(md) {
      height: 760px;
      object-fit: cover;
    }
  }
}
.banner-title {
  background-color: #ebe5df;
  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
  }
  @include media-breakpoint-up(md) {
    padding-top: 320px !important;
  }
}
</style>
