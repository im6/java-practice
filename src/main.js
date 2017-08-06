import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './route';
import Layout from './components/layout';

/* eslint-disable no-new */
Vue.use(VueRouter);

new Vue({
  router,
  template: '<Layout/>',
  components: { Layout },
}).$mount('#app');
