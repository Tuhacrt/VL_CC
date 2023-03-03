import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import axios, { AxiosError } from 'axios';
import type { Carts, Cart } from '@/types';

const { VITE_URL, VITE_PATH } = import.meta.env;

export const useCartStore = defineStore('counter', () => {
  const cart = ref<Carts | null>(null);
  const getCart = async () => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart`;

    try {
      const response = await axios.get(url);
      cart.value = response.data.data;
    } catch (err: unknown) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const updateCart = async (cartData: Cart) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart/${cartData.id}`;
    const data = { product_id: cartData.id, qty: cartData.qty };

    try {
      const response = await axios.put(url, { data });
      alert(response.data.message);
      getCart();
    } catch (err: unknown) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };
  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value += 1;
  // }

  return { cart, getCart, updateCart };
});
