import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    getNewNumberOptions(state) {
      return {
        exceptFirst: state.exceptFirst,
        exceptSecond: state.exceptSecond,
        exceptThird: state.exceptThird,
      };
    },
  },
  state: {
    exceptFirst: false,
    exceptSecond: false,
    exceptThird: false,
  },
  mutations: {
    setExceptFirst(state, value) {
      state.exceptFirst = value;
    },
    setExceptSecond(state, value) {
      state.exceptSecond = value;
    },
    setExceptThird(state, value) {
      state.exceptThird = value;
    },
  },
  actions: {},
  modules: {},
});
