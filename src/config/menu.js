
export const produceMenus = [
  { name: "生产经营", routeName: "productionManagement", children: [
    { name: "税务服务管理系统", description: "xxx" },
    { name: "煤炭流向监测系统", description: "xxxxx" },
    { name: "煤炭保供调度管理系统", description: "xxxx" },
    { name: "决策支持系统", description: "" },
    { name: "视频智能监管系统", description: "" }
  ] },
  { name: "能耗监测系统", children: [
    { name: "能耗监测系统", description: "" },
    { name: "双控指标管理系统", description: "" },
    { name: "能源计量管理系统", description: "" },
    { name: "节能监察管理系统", description: "" },
    { name: "用能权管理系统", description: "" },
    { name: "双碳管理系统", description: "" },
    { name: "决策支持分析系统", description: "" },
    { name: "公众服务系统", description: "" },
    { name: "综合管理服务系统", description: "" },
    { name: "运维系统", description: "" },
    { name: "利旧整合环保与节能减排管理系统", description: "" }
  ] },
  { name: "安全监管", children: [
    { name: "风险监测管理系统", description: "" },
    { name: "水害防治监测系统", description: "" },
    { name: "瓦斯抽样监测系统", description: "" },
    { name: "应急救援管理系统", description: "" },
    { name: "执法检查系统", description: "" },
    { name: "网络安全管理系统", description: "" },
    { name: "矿用设备监察管理", description: "" },
    { name: "电子封条智能监管系统", description: "" },
    { name: "煤矿入井唯一检测联网系统", description: "" },
    { name: "复合灾害动态分析评估系统", description: "" },
    { name: "决策支持分析系统", description: "" }
  ] },
  { name: "企业服务", children: [
    { name: "煤炭企业公共服务系统", description: "" },
    { name: "企业税务服务系统", description: "" },
    { name: "煤炭安责险服务系统", description: "" },
    { name: "煤炭金融借贷服务系统", description: "" },
    { name: "煤炭企业矿用设备管理系统", description: "" },
    { name: "企业智能煤流监控管理系统", description: "" },
    { name: "企业智能煤矿探放水瓦斯监测管理系统", description: "" },
    { name: "企业煤矿智能装备管理系统", description: "" },
    { name: "企业煤矿智能管理系统", description: "" },
    { name: "煤炭企业安全智能检测与检查管理系统", description: "" }
  ] },
  { name: "产业赋能", children: [
    { name: "全国企业信用平台省级平台", description: "" },
    { name: "个人信用平台省级平台", description: "" },
    { name: "煤炭行业企业信用评估系统", description: "" }
  ] }
];

export const menuList = [
  { name: "政策法规", path: "/index" },
  { name: "政府监管", path: "/index33" },
  { name: "产品", path: "/index2", children: produceMenus, dropdownHeight: 320 },
  { name: "企业服务", path: "/index3" },
  { name: "产业服务", path: "/index4" },
  { name: "开发者服务", path: "/index5" },
  { name: "帮助与支持", path: "/index5" }
];
