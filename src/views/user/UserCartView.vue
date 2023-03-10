<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useCartStore } from '@/stores/cartStore';
import { useLoadingStore } from '@/stores/loadingStore';
import UserMayLike from '@/components/user/UserMayLike.vue';

const router = useRouter();

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const cartStore = useCartStore();
const { updateCart, deleteAllCarts, deleteCartItem } = cartStore;
const { carts } = storeToRefs(cartStore);
</script>

<template>
  <div class="container">
    <!-- Cart -->
    <div class="mt-4">
      <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          :style="{ display: carts.carts?.length === 0 ? 'none' : 'inline-block' }"
          @click="deleteAllCarts"
        >
          清空購物車
        </button>
      </div>
      <div v-if="!carts?.carts?.length" class="p-2">
        <p class="h1 text-primary font-weight-bold mb-5">購物車是空的喔！</p>
      </div>
      <table v-else class="table align-middle">
        <thead>
          <tr>
            <th />
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <template v-if="carts?.carts">
            <tr v-for="item in carts.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  :disabled="isLoading"
                  @click="deleteCartItem(item.id)"
                >
                  <div>移除購物車</div>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div v-if="item.product.price < item.product.origin_price" class="text-success">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input
                      v-model.number="item.qty"
                      aria-label="qty-input"
                      min="1"
                      type="number"
                      class="form-control"
                      :disabled="isLoading"
                      @change="updateCart(item)"
                    />
                    <span id="basic-addon2" class="input-group-text">{{ item.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td>
                <p>
                  {{ item.product?.price || item.product?.origin_price }}
                </p>
              </td>
              <td class="text-end">
                <small v-if="item.product.price < item.product.origin_price" class="text-success"
                  >折扣價：{{ item.final_total }}</small
                >
                <small v-else>{{ item.total }}</small>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr v-if="carts.final_total < carts.total">
            <td />
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">
              {{ carts.final_total }}
            </td>
          </tr>
          <tr v-else>
            <td />
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">
              {{ carts.total }}
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="text-end my-4">
        <button
          class="btn btn-success"
          type="button"
          :style="{ display: carts.carts?.length === 0 ? 'none' : 'inline-block' }"
          @click="router.push('/order')"
        >
          付款結帳
        </button>
      </div>
      <UserMayLike />
    </div>
    <!-- Cart -->
  </div>
  <!--  Loading Component-->
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="true" />
  <!--  Loading Component-->
</template>
