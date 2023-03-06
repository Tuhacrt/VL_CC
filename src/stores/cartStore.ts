import { onMounted, ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import axios, { AxiosError } from 'axios';

import type { Carts, Cart } from '@/types';
import { useLoadingStore } from '@/stores/loadingStore';

const { VITE_URL, VITE_PATH } = import.meta.env;

export const useCartStore = defineStore('cart', () => {
  const carts = ref<Carts>({
    carts: [] as Cart[],
    total: 0 as number,
    final_total: 0 as number
  });
  const loadingStore = useLoadingStore();
  const { isLoading } = storeToRefs(loadingStore);

  const getCart = async () => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
    isLoading.value = true;

    try {
      const response = await axios.get(url);
      isLoading.value = false;
      carts.value = response.data.data;
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const updateCart = async (cartData: Cart) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart/${cartData.id}`;
    const data = { product_id: cartData.id, qty: cartData.qty };
    isLoading.value = true;

    try {
      const response = await axios.put(url, { data });
      alert(response.data.message);
      getCart();
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const addToCart = async (productId: string, quantity = 1) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
    const data = { product_id: productId, qty: quantity };
    isLoading.value = true;

    try {
      const response = await axios.post(url, { data });
      alert(response.data.message);
      getCart();
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const deleteAllCarts = async () => {
    const url = `${VITE_URL}/api/${VITE_PATH}/carts`;
    isLoading.value = true;

    try {
      const response = await axios.delete(url);
      alert(response.data.message);
      getCart();
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const deleteCartItem = async (productId: string) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart/${productId}`;
    isLoading.value = true;

    try {
      const response = await axios.delete(url);
      alert(response.data.message);
      getCart();
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  onMounted(() => {
    getCart();
  });

  return { carts, getCart, updateCart, addToCart, deleteAllCarts, deleteCartItem };
});
