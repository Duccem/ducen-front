import { UserJson } from '../Models/User';
import { ActionContext, MutationTree, ActionTree } from "vuex";

/* Types of auth store */

//** AUTH STATE CONFIG */

/** Auth type of data that the store handler */
export type AuthState = {
    user: UserJson | null;
    token: string;
}

const state: AuthState = {
    user: null,
    token: ''
}

//** Mutations definition of auth module */

/** Types of mutations permited */
export enum AuhtMutationsType {
    SET_USER = "SET_USER",
    SET_TOKEN = "SET_TOKEN"
}

/** Contract to use the Mutations of Auth module 
 * @function SET_USER modify, update or set the current user
 * @function SET_TOKEN set the access_token, to hold the session and can make request to the API
*/
export interface AuthMutations<S = AuthState>  {
    [AuhtMutationsType.SET_USER](state: S, payload: UserJson): void;
    [AuhtMutationsType.SET_TOKEN](state: S, payload: string): void;
}

const mutations: MutationTree<AuthState> & AuthMutations = {
    [AuhtMutationsType.SET_USER](state, payload: UserJson){
        state.user = payload;
    },
    [AuhtMutationsType.SET_TOKEN](state, payload: string){
        state.token = payload;
    }
}

//** Actions of the Auth module store */

/** Types of actions permited */
export enum AuthActionsType {
    SET_USER = "SET_USER",
    SET_TOKEN = "SET_TOKEN"
}

/** Extend of the action context object */
export type AuthActionContext = {
    commit<K extends keyof AuthMutations>(key: K, payload: Parameters<AuthMutations[K]>[1]): ReturnType<AuthMutations[K]>
} & Omit<ActionContext<AuthState, AuthState>, 'commit'>

/** Contract to use the Actions of Auth module store from the components and others */
export interface AuthActions {
    [AuthActionsType.SET_USER]({ commit }: AuthActionContext, payload: UserJson): void
    [AuthActionsType.SET_TOKEN]({ commit }: AuthActionContext, payload: string): void
}

const actions: ActionTree<AuthState, AuthState> & AuthActions = {
    [AuthActionsType.SET_USER]({ commit }, payload) {
        commit(AuhtMutationsType.SET_USER, payload)
    },

    [AuthActionsType.SET_TOKEN]({commit}, payload){
        commit(AuhtMutationsType.SET_TOKEN, payload)
    }
}

export const auth = {
    namespeced: true,
    state,
    mutations,
    actions
}

