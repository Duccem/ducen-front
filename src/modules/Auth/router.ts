
import HomeUser from "@/modules/users/views/HomeUser.vue";
import Login from "@/modules/Auth/Views/Login.vue";
import { RouteConfig } from 'vue-router';
const routes: Array<RouteConfig> = [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path:'/sign-up',
      name:'Home',
      component: HomeUser
    }
];

export default routes