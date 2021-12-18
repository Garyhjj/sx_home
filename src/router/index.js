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
      // 登录
      {
        path: "login",
        name: "login",
        component: _import("login")
      },
      // 联系我们
      {
        path: "support/contact",
        name: "contact",
        component: _import("support/contact")
      },
      // 开发者服务
      {
        path: "dev_service",
        name: "devService",
        component: _import("dev-service")
      },
      // 政策法规
      {
        path: "policy",
        name: "policy",
        component: _import("policy")
      },
      // 政策法规
      {
        path: "policy/detail",
        name: "policyDetail",
        component: _import("policy/detail")
      },
      // 搜索结果
      {
        path: "search",
        name: "search",
        component: _import("search")
      },
      // 文档中心
      {
        path: "doc",
        name: "doc",
        component: _import("doc")
      },
      // 产业赋能
      {
        path: "/production_power",
        name: "productionPower",
        component: _import("systems/production-power")
      },
      // 企业服务
      {
        path: "/company_service",
        name: "companyService",
        component: _import("systems/company-service")
      }
    ]
  },
  // 双碳服务板块
  {
    path: "/double_carbon",
    redirect: { name: "powerObserve" },
    component: mainLayout,
    children: [{
      path: "power_observe",
      name: "powerObserve",
      component: _import("systems/double-carbon/power-observe")
    }]
  },
  // 安全监管板块
  {
    path: "/safe",
    redirect: { name: "safeApp" },
    component: mainLayout,
    children: [{
      path: "app",
      name: "safeApp",
      component: _import("systems/safe/app")
    }]
  },
  // 生产经营板块
  {
    path: "/production_management",
    redirect: { name: "productionManagement" },
    component: mainLayout,
    children: [{
      path: "index",
      name: "productionManagement",
      component: _import("platforms/production-management")
    },
    {
      path: "info_management",
      name: "infoManagement",
      component: _import("systems/production-management/info-management")
    }]
  },
  {
    path: "*",
    redirect: "/index"
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
