import Vuex from "vuex";
import posts from "./modules/post";
import auth from './modules/auth';
import comments from './modules/comments';
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  name: "store",
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts,
    auth,
    comments
  },
  plugins:[createPersistedState()],
})