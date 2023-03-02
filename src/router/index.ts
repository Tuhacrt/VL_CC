import axios, { AxiosError } from 'axios';
import { createRouter, createWebHashHistory, type NavigationGuardNext } from 'vue-router';

const { VITE_URL, VITE_TOKEN } = import.meta.env;

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('@/views/user/UserBaseView.vue'),
      children: [
        {
          path: '',
          name: 'Index',
          component: () => import('@/views/user/UserIndexView.vue')
        },
        {
          path: '/products',
          name: '產品列表',
          component: () => import('@/views/user/UserProductsView.vue')
        },
        {
          path: '/product/:id',
          name: '產品頁面',
          component: () => import('@/views/user/UserProductView.vue')
        },
        {
          path: '/cart',
          name: '購物車',
          component: () => import('@/views/user/UserCartView.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('@/views/NotFound.vue')
        }
      ]
    },

    {
      path: '/login',
      component: () => import('@/views/admin/LoginView.vue')
    },

    {
      path: '/admin',
      component: () => import('@/views/admin/AdminBaseView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          component: () => import('@/views/admin/AdminProductsView.vue')
        },
        {
          path: 'orders',
          component: () => import('@/views/admin/AdminOrdersView.vue')
        },
        {
          path: 'coupons',
          component: () => import('@/views/admin/AdminCouponsView.vue')
        },
        {
          path: 'articles',
          component: () => import('@/views/admin/AdminArticlesView.vue')
        },
        {
          path: ':pathMatch(.*)*',
          component: () => import('@/views/NotFound.vue')
        }
      ]
    }
  ]
});

const setAuthorization = (tokenName: string) => {
  const cookieValue = `; ${document.cookie}`;
  const parts = cookieValue.split(`; ${tokenName}=`);
  const token = parts.length === 2 ? parts.pop()?.split(';').shift() : '';
  axios.defaults.headers.common.Authorization = token;
};

const checkAdmin = async (next: NavigationGuardNext) => {
  const url = `${VITE_URL}/api/user/check`;
  try {
    await axios.post(url);
    next();
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
    next({ path: '/login' });
  }
};

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    setAuthorization(VITE_TOKEN);
    await checkAdmin(next);
  } else next();
});

export default router;
