<template>
  <div class="likes container py-4 py-md-7">
    <div class="likes-title text-center text-md-start">
      <h2 class="py-2">您可能會喜歡</h2>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card rounded-0">
          <img class="card-img rounded-0" src="@/images/cc_beach.jpeg" alt="" />
          <div
            class="card-body card-img-overlay bg-black text-start rounded-0"
            style="--bs-bg-opacity: 0.5"
          >
            <h5 class="card-title text-white pb-3 border-bottom mb-3">旅游拍攝</h5>
            <p class="card-text text-white">
              因應後疫情潮流，VLCC旅拍服務即日起 至2/13日享有9折優惠。
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card rounded-0">
          <img class="card-img rounded-0" src="@/images/cc_rever.jpg" alt="" />
          <div
            class="card-body card-img-overlay bg-black text-start rounded-0"
            style="--bs-bg-opacity: 0.5"
          >
            <h5 class="card-title text-white pb-3 border-bottom mb-3">婚禮系列</h5>
            <p class="card-text text-white">
              因應新年新婚潮，凡是購買婚禮攝影的 客戶皆可以無條件升級水晶相框
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-3">
        <div class="card rounded-0">
          <img class="card-img rounded-0" src="@/images/vl_calender.jpg" alt="" />
          <div
            class="card-body card-img-overlay bg-black text-start rounded-0"
            style="--bs-bg-opacity: 0.5"
          >
            <h5 class="card-title text-white pb-3 border-bottom mb-3">攝影師行程表</h5>
            <p class="card-text text-white">目前VL以及CC兩位攝影師都還有空缺的 日程可供預約。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/all.scss';
.temp {
  background-image: url('@/images/cc_beach.jpg');
}
.card {
  height: 280px;

  &-img {
    object-fit: cover;
    height: 100%;
    &-overlay {
      top: 50%;
      height: 50%;
      @include media-breakpoint-up(xl) {
        top: 60%;
        height: 40%;
      }
    }
  }
}
</style>