import Vue from 'vue'
import App from './App.vue'
import store from "./store/index";
import router from './router';
import Vuelidate from "vuelidate";
import VueResource from "vue-resource";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(VueResource);

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount('#app')
