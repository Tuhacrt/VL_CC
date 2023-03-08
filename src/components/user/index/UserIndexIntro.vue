<template>
  <div class="intro container-fluid p-0 p-md-2 text-white pb-3">
    <div class="container py-7 px-3">
      <div class="intro-title position-relative">
        <h2 class="fw-bold text-white mb-3">攝影 <br />是人生每個時刻的註解</h2>
        <div class="position-relative p-2"><div class="break-line"></div></div>
      </div>
      <p class="mt-4 fs-6">
        每段人生旅程都是一場精彩的冒險， VL & CC 讓您紀錄所有美好瞬間， 傳遞每一段人生旅程的故事，
        讓您隨時重溫美好回憶，紀念美好時光。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/all.scss';
.intro {
  background-image: url('@/images/vl_guitar_intro.jpg');
  background-size: cover;
  background-position: calc(-230px + 30cqw) 30%;
  @include media-breakpoint-up(sm) {
    background-position: calc(-5cqw) 30%;
  }
}
.break-line {
  content: '';
  position: absolute;
  top: -75%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 48px;
  width: 1px;
  transform: rotate(60deg);
  background: #fff;
}
</style>
