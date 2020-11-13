import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import index from "@/modules/Auth/Views/index.vue";
import authRouter from "@/modules/Auth/config/router";
import Layout from "@/modules/shared/Components/Layout.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    children: authRouter,
    component: index
  },
  {
    path:"/home",
    name:'user',
    component: Layout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
