import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      token: null,
      id: null
    }
  },
  mutations: {
    disconnect(state) {
      state.user.token = null;
      state.user.id = null;
    },
    connect(state, payload) {
      state.user.token = payload.token;
      state.user.id = payload.userId;
    }
  },
  actions: {},
  modules: {}
});
