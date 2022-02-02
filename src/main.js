import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTypedJs from 'vue-typed-js';
import VueEllipseProgress from 'vue-ellipse-progress';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Vue.config.productionTip = false;
Vue.use(VueTypedJs);
Vue.use(VueEllipseProgress);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
