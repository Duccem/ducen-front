import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/modules/Auth/config/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});
