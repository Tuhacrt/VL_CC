<script setup lang="ts">
import { ref, toRef } from 'vue';
import useModal from '@/utils/useModal';
import type { Product } from '@/types';

const props = defineProps<{ tempProduct: Product; isNew: boolean }>();
const emit = defineEmits(['update-product']) // eslint-disable-line
const productData = toRef(props, 'tempProduct');
const productModalRef = ref<HTMLDivElement | string>('');
const { showModal, hideModal } = useModal(productModalRef);

const initializeProductImages = () => {
  productData.value.imagesUrl = [''];
};

defineExpose({ showModal, hideModal });
</script>

<template>
  <div
    id="productModal"
    ref="productModalRef"
    class="modal fade border-0"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? '新增產品' : '編輯產品' }}</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            aria-label="Close"
            @click="hideModal"
          />
        </div>
        <div class="modal-body">
          <div class="row">
            <div v-if="Array.isArray(productData?.imagesUrl)" class="col-sm-4">
              <div v-for="(image, key) in productData?.imagesUrl" :key="key">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    v-model="productData.imagesUrl[key]"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <img class="img-fluid mb-2" :src="image" :alt="`${image}:${key}`" />
              </div>
              <div v-if="productData?.imagesUrl[productData?.imagesUrl.length - 1] !== ''">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="productData?.imagesUrl.push('')"
                >
                  新增圖片
                </button>
              </div>
              <div v-else>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="productData?.imagesUrl.pop()"
                >
                  刪除圖片
                </button>
              </div>
            </div>
            <div v-else>
              <button
                type="button"
                class="btn btn-outline-primary btn-sm d-block w-100"
                @click="initializeProductImages"
              >
                新增圖片
              </button>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  v-model="productData.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    v-model="productData.category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    v-model="productData.unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    v-model.number="productData.origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    v-model.number="productData.price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  v-model="productData.description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                />
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  v-model="productData.content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    v-model="productData.is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="hideModal">取消</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', productData)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
