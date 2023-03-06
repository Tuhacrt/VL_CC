import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios, { AxiosError } from 'axios';
import type { Carts, Cart } from '@/types';

const { VITE_URL, VITE_PATH } = import.meta.env;

export const useCartStore = defineStore('cart', () => {
  const carts = ref<Carts | null>(null);
  const getCart = async () => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart`;

    try {
      const response = await axios.get(url);
      carts.value = response.data.data;
    } catch (err: unknown) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const updateCart = async (cartData: Cart) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart/${cartData.id}`;
    const data = { product_id: cartData.id, qty: cartData.qty };

    try {
      const response = await axios.put(url, { data });
      console.log(response.data.message);
      getCart();
    } catch (err: unknown) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const addToCart = async (productId: string, quantity = 1) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
    const data = { product_id: productId, qty: quantity };
    // state.isLoading = true;

    try {
      const response = await axios.post(url, { data });
      // state.isLoading = false;
      // findMoreModalRef.value?.hideModal();
      console.log(response.data.message);
      getCart();
    } catch (err: unknown) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
    // };
  };

  const deleteAllCarts = async () => {
    const url = `${VITE_URL}/api/${VITE_PATH}/carts`;
    // state.isLoading = true;

    try {
      const response = await axios.delete(url);
      // state.isLoading = false;
      alert(response.data.message);
      getCart();
    } catch (err: unknown) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const deleteCartItem = async (productId: string) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/cart/${productId}`;
    // state.isLoading = true;

    try {
      const response = await axios.delete(url);
      // state.isLoading = false;
      alert(response.data.message);
      getCart();
    } catch (err: unknown) {
      // state.isLoading = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  return { carts, getCart, updateCart, addToCart, deleteAllCarts, deleteCartItem };
});
