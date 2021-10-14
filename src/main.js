import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './quasar';

import langHeb from 'quasar/lang/he'
// ...
import Quasar from 'quasar'

// apex
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

// vue-skeleton-loader
import VueSkeletonLoader from 'skeleton-loader-vue';
Vue.use(VueSkeletonLoader)
Vue.component('vue-skeleton-loader', VueSkeletonLoader);

// import Skeleton from 'vue-loading-skeleton';
// Vue.use(Skeleton)

// ...
Vue.use(Quasar, {
  // ...,
  lang: langHeb
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
