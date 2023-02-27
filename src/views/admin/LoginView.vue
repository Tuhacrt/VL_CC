<script setup lang="ts">
import { ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'vue-router';

const { VITE_URL, VITE_TOKEN, VITE_TEXT } = import.meta.env;
const router = useRouter();
const isLoading = ref<boolean>(false);

const user = {
  username: '' as string,
  password: '' as string
};

const login = async () => {
  const url = `${VITE_URL}/admin/signin`;
  isLoading.value = true;

  try {
    const response = await axios.post(url, user);
    const { token, expired } = response.data;

    isLoading.value = false;
    document.cookie = `${VITE_TOKEN}=${token}; expires=${new Date(expired)};`;
    router.push('/admin/products');
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};
</script>

<template>
  <!-- Login -->
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">歡迎登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              id="username"
              v-model="user.username"
              type="email"
              class="form-control"
              placeholder="example@example.com"
              required
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              id="password"
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">登入</button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2023 ~ ∞ - 六角學院</p>
    <div class="text-center">
      <p>{{ VITE_TEXT }}</p>
    </div>
  </div>
  <!-- Login -->
  <!--  Loading Component-->
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>

<style scoped>
html,
body {
  height: 100%;
  text-align: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
