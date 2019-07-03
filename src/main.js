import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import {routes} from './routes'
import vueSmoothScroll from 'vue2-smooth-scroll'
import axios from './backend/vue-axios'

import  './assets/css/main.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(vueSmoothScroll);

const router = new VueRouter ({
  mode: 'history',
  routes
});
global.jQuery = jQuery;
global.$ = jQuery;
let Bootstrap = require('bootstrap')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  axios,
}).$mount('#app')
