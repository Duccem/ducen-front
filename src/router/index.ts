import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import authRouter from "@/modules/auth/router";
import index from "@/modules/auth/views/index.vue";
import index2 from "@/modules/users/views/index.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    children: authRouter,
    component: index
  },
  {
    path:"/user",
    name:'user',
    component: index2
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
