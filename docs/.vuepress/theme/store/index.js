import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    openId: "",
    code: "",
    showLoading: true,
  },
  mutations: {
    updateLoading(state, showLoading) {
      state.showLoading = showLoading;
    },
  },
});
