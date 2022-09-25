import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import "./style/common.css";

// 页面权限
import "./permission";


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
