import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from 'axios'
Vue.prototype.axios = axios
Vue.config.productionTip = false

// console.log("--", process.env.VUE_APP_SERVICE_URL);
import "./style/reset.css"

import "./permission"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
