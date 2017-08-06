import Vue from 'vue';
import App from './App';
import router from './routers';
import VueResource from 'vue-resource';

import 'common/stylus/index.styl';

Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
