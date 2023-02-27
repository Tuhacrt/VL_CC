<template>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/all.scss';
body {
  background-color: #f0f2f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // color:#f0f2f5
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.modal-title span {
  color: #f0f2f5;
}
</style>
