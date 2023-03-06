import { onMounted, ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import axios, { AxiosError } from 'axios';
import router from '@/router';

import type { Pagination, Product, Products } from '@/types';
import { useLoadingStore } from '@/stores/loadingStore';

const { VITE_URL, VITE_PATH } = import.meta.env;

export const useProductStore = defineStore('product', () => {
  const products = ref<Products>({
    products: [] as Product[],
    pagination: {} as Pagination
  } as Products);
  const tempProduct = ref<Product>({
    imagesUrl: [] as string[]
  } as Product);
  const loadingStore = useLoadingStore();
  const { isLoading } = storeToRefs(loadingStore);

  const getProductList = async (
    currentPage: number = products.value?.pagination.current_page || 1
  ) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/products?page=${currentPage}`;
    isLoading.value = true;

    try {
      const response = await axios.get(url);
      isLoading.value = false;
      products.value = response.data;
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const gotToProduct = async (currentProduct: Product) => {
    const { id } = currentProduct;
    const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;
    isLoading.value = true;

    try {
      await axios.get(url);
      isLoading.value = false;
      router.push(`/product/${id}`);
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  onMounted(() => {
    getProductList();
  });

  return { products, tempProduct, getProductList, gotToProduct };
});
