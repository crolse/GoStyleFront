import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueQrcodeReader from "vue-qrcode-reader";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(VueQrcodeReader);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
