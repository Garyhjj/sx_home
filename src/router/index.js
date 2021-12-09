import Vue from "vue";
import VueRouter from "vue-router";
import mainLayout from "../layout/index.vue";

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require("@/libs/util.import." + process.env.NODE_ENV);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: mainLayout,
    redirect: { name: "index" },
    children: [
      // 首页
      {
        path: "index",
        name: "index",
        component: _import("home")
      },
      // 首页
      {
        path: "login",
        name: "login",
        component: _import("login")
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
