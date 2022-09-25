import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "layout",
    redirect: "/index",
    component: () => import("../layout/Index"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/index/index.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "/member",
        name: "member",
        component: () => import("../views/member/index.vue"),
        meta: {
          title: "会员管理"
        }
      },
      {
        path: "/staff",
        name: "staff",
        component: () => import("../views/staff/index.vue"),
        meta: {
          title: "员工管理"
        }
      },
      {
        path: "/supplier",
        name: "supplier",
        component: () => import("../views/supplier/index.vue"),
        meta: {
          title: "供应商管理"
        }
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods/index.vue"),
        meta: {
          title: "商品管理"
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
