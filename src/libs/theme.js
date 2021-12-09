export default {
  install(vue) {
    // 在需要跟随主题的组件的根元素上添加此指令，即可使用variables.scss里的选择器变量添加样式
    vue.directive("theme", {
      inserted: function(el, binding, vnode) {
        const { value } = binding;
        el = value && document.querySelector(value) || el;
        const vm = vnode.context;
        const theme = vm.$store.getters.theme;
        setElTheme(el, theme);
        vm.$watch("$store.getters.theme", (v) => {
          setElTheme(el, v);
        });

        // 退出登录后只用浅色主题
        vm.$watch("$store.getters.token", (v) => {
          !v && setElTheme(el, "light");
        });
      }
    });
    function setElTheme(el, theme) {
      el && el.setAttribute("iot-theme", theme);
    }
  }
};
