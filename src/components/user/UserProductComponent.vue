<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore';
import { onMounted } from 'vue';

const route = useRoute();
const cartStore = useCartStore();
const { addToCart } = cartStore;
const productStore = useProductStore();
const { getProduct } = productStore;
const { tempProduct } = storeToRefs(productStore);
const quantity = 1;

onMounted(() => {
  const { id } = tempProduct.value;
  if (id !== route.params?.id) getProduct(route.params?.id as string);
});
</script>

<template>
  <div class="container-fluid bg-background">
    <div class="container py-5">
      <div class="about">
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img
                v-if="tempProduct?.imagesUrl"
                class="img-fluid"
                :src="tempProduct?.imagesUrl[0]"
                alt=""
              />
            </div>
            <div class="col-sm-6">
              <h1>{{ tempProduct.title }}</h1>
              <span class="badge bg-primary rounded-pill">{{ tempProduct.category }}</span>
              <p>商品描述：{{ tempProduct.description }}</p>
              <p>商品內容：{{ tempProduct.content }}</p>
              <div v-if="!tempProduct.price" class="h5">{{ tempProduct.origin_price }} 元</div>
              <div v-else>
                <del class="h6 text-muted">原價 {{ tempProduct.origin_price }} 元</del>
                <div class="h5">現在只要 {{ tempProduct.price }} 元</div>
              </div>
              <div>
                <div class="input-group">
                  <input
                    v-model.number="quantity"
                    aria-label="quantity-input"
                    min="1"
                    type="number"
                    class="form-control"
                  />
                  <button
                    type="button"
                    class="btn btn-primary text-white"
                    @click="addToCart(tempProduct.id, quantity)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
