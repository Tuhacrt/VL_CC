import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'bootstrap';
import VueAwesomePaginate from 'vue-awesome-paginate';
import Antd from 'ant-design-vue';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';

import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from 'vue-loading-overlay';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faEnvelope,
  faPhone,
  faHeadphones,
  faLocationDot,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import Router from './router';

import '@/assets/all.scss';
import 'vue-awesome-paginate/dist/style.css';
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

library.add(faEnvelope, faPhone, faHeadphones, faLocationDot, faBars, faFacebook, faInstagram);

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
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
