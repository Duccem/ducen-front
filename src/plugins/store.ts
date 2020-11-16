import Vue from "vue";
import Vuex from "vuex";

// Modules of the store
import Auth from "@/modules/Auth/Store/store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Auth
    }
});