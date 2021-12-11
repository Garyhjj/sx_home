import Vue from "vue";
import "./elementUI";

Vue.component("app-animate-number", () => import("./animate-number"));
Vue.component("app-svg-icon", () => import("./svg-icon"));
Vue.component("app-animate-img", () => import("./animate-img"));
