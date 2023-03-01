<template>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/all.scss';
body {
  background-color: #f0f2f5;
}
#app {
  font-family: 'Noto Serif TC', serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #9e5d30;
    }
  }
}
</style>
