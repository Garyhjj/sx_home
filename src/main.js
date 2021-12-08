import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/styles/index.scss";
import "@/components";
// svg 图标
import "@/assets/svg-icons";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
