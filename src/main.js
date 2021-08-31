import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './quasar';

import langHeb from 'quasar/lang/he'
// ...
import Quasar from 'quasar'

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
