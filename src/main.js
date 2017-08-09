import Vue from 'vue';
import App from './App';
import router from './routers';
import VueResource from 'vue-resource';
import VueLazyLoad from 'vue-lazyload';

import 'common/stylus/index.styl';

Vue.use(VueResource);
Vue.use(VueLazyLoad, {
  loading: require('common/image/loading.gif')
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
