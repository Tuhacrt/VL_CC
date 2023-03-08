import { onMounted, ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import axios, { AxiosError } from 'axios';
// import { useRoute } from 'vue-router';
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
  const productsAll = ref<Products>({
    products: [] as Product[],
    pagination: {} as Pagination
  } as Products);
  const categories = ref<string[]>([
    '所有產品',
    '肖像攝影',
    '藝術攝影',
    '商業攝影',
    '婚禮拍攝',
    '日常拍攝',
    '旅遊拍攝'
  ]);
  const loadingStore = useLoadingStore();
  const { isLoading } = storeToRefs(loadingStore);

  const getCategoryList = () => {
    const categorySet = new Set<string>();
    products.value?.products.map((elem) => categorySet.add(elem.category));
    for (const category of categorySet) {
      categories.value.push(category);
    }
  };

  const getProductAll = async () => {
    const url = `${VITE_URL}/api/${VITE_PATH}/products/all`;
    isLoading.value = true;

    try {
      const response = await axios.get(url);
      isLoading.value = false;
      productsAll.value = response.data;
      getCategoryList();
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const getProductList = async (
    currentPage: number = products.value?.pagination.current_page || 1,
    category: string = products.value?.pagination.category || ''
  ) => {
    let url = `${VITE_URL}/api/${VITE_PATH}/products?page=${currentPage}`;
    if (category !== '') url += `&category=${category}`;

    try {
      const response = await axios.get(url);
      isLoading.value = false;
      products.value = response.data;
    } catch (err: unknown) {
      isLoading.value = false;
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const getProduct = async (id: string) => {
    const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;
    isLoading.value = true;

    try {
      const response = await axios.get(url);
      isLoading.value = false;
      tempProduct.value = response.data.product;
    } catch (err: unknown) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  };

  const gotToProduct = async (currentProduct: Product) => {
    const { id } = currentProduct;
    const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;
    getProduct(id);
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
    getProductAll();
    getProductList();
  });

  return { products, tempProduct, categories, getProductList, getProduct, gotToProduct };
});
