import { Actions, Mutations, Getters, State, CustomActionContext } from "@/plugins/store";
import { MutationTree, ActionTree, GetterTree, ActionContext } from "vuex";
import { UserJson } from '../Models/User';

export type AuthState = {
    user: UserJson | null;
    token: string;
}

export enum AuthMutationsType  {
    SET_USER = "SET_USER",
    SET_TOKEN = "SET_TOKEN"
}

export interface AuthMutations extends Mutations {
    [AuthMutationsType.SET_USER](state: AuthState, payload: UserJson): void;
    [AuthMutationsType.SET_TOKEN](state: AuthState, payload: string): void;
}

const mutations: AuthMutations = {
    [AuthMutationsType.SET_USER](state, payload: UserJson){
        state.user = payload;
    },
    [AuthMutationsType.SET_TOKEN](state, payload: string){
        state.token = payload;
    }
}

export enum AuthActionsType {
    SET_USER = "SET_USER",
    SET_TOKEN = "SET_TOKEN"
}

export type AuthCustomActionContext = CustomActionContext<AuthState>

export interface AuthActions extends Actions {
    [AuthActionsType.SET_USER]({ commit }: AuthCustomActionContext, payload: UserJson): void
    [AuthActionsType.SET_TOKEN]({ commit }: AuthCustomActionContext, payload: string): void
}

const actions: AuthActions = {
    [AuthActionsType.SET_USER]({ commit }, payload) {
        commit(AuthMutationsType.SET_USER, payload)
    },

    [AuthActionsType.SET_TOKEN]({commit}, payload){
        commit(AuthMutationsType.SET_TOKEN, payload)
    }
}

const getters: GetterTree<State,State> = {}

const state: any {

}
export default {
    mutations, actions, getters, state
}