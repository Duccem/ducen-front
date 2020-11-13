import Vue from "vue";
import Vuex, { Store as VuexStore, CommitOptions, DispatchOptions, MutationTree, ActionContext, ActionTree, GetterTree } from "vuex";
import auth from "@/modules/Auth/config/store";

Vue.use(Vuex);

export type Store<S = State> = Omit<VuexStore<S>, "getters" | "commit" | "dispatch"> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(key: K, payload: P, options?: CommitOptions): ReturnType<Mutations[K]>;
    dispatch<K extends keyof Actions>(key: K, payload: Parameters<Actions[K]>[1], options?: DispatchOptions): ReturnType<Actions[K]>;
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    };
}

//** INTERFACES AND TYPES */

/** Auth type of data that the store handler */
export type State = {

}

/** Types of mutations permited */
export enum MutationsType {

}

/** Contract to use the Mutations of Auth module */
export interface Mutations {
    
}

/** Types of actions permited */
export enum ActionsType {
    
}

/** Extend of the action context object */
export type CustomActionContext<S = State> = Omit<ActionContext<S, S>, 'commit'> & {
    commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} 

/** Contract to use the Actions of Auth module store from the components and others */
export interface Actions {
    
}

export interface Getters {
    getToken(state: State): string;
}

/* Types of auth store */

//** AUTH STATE CONFIG */

const state: State = {
    user: null,
    token: ''
}

//** Mutations definition of auth module */

const mutations: MutationTree<State> & Mutations = {
    
}

//** Actions of the Auth module store */

const actions: ActionTree<State,State> & Actions = {
    
}

//** Getters of the values */

const getters: GetterTree<State, State> & Getters = {
    getToken(state){
        return state.token;
    }
}

export default new Vuex.Store({
    state:{
        ...state,
        ...auth.state
    }
});