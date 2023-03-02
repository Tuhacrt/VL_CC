<template>
  <div class="intro container-fluid p-0 p-md-2 text-white mb-2">
    <div class="container">
      <h2 class="fw-bold text-white">攝影 <br />是人生每個時刻的註解</h2>
      <div class="p-2"><div class="break-line"></div></div>
      <p class="mt-3">
        每段人生旅程都是一場精彩的冒險，VL&CC讓您紀錄所有美好瞬間， 傳遞每一段人生旅程的故事，
        讓您隨時重溫美好回憶，紀念美好時光。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  background-image: url('@/images/vl_guitar_intro.jpg');
  background-size: 125%;
  background-position: -50px 0;
  background-repeat: no-repeat;
  .container {
    padding: 80px 12px;
  }
}
.break-line {
  content: '';
  position: absolute;
  bottom: -95px;
  left: 182px;
  height: 48px;
  width: 1px;
  transform: rotate(60deg);
  background: #fff;
}
</style>
