import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'bootstrap';
import VueAwesomePaginate from 'vue-awesome-paginate';
import Antd from 'ant-design-vue';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate' // eslint-disable-line

import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from 'vue-loading-overlay';
import App from './App.vue';
import Router from './router';

import 'ant-design-vue/dist/antd.css';
import 'vue-loading-overlay/dist/css/index.css';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
});
setLocale('zh_TW');

createApp(App)
  .use(createPinia())
  .use(Router)
  .use(Loading)
  .use(Antd)
  .use(VueAwesomePaginate)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .component('Loading', Loading)
  .mount('#app');
