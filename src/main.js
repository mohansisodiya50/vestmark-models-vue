// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import BootstrapVue from 'bootstrap-vue';
import VueFire from 'vuefire';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueFire);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
