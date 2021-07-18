import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'ru',
  },
  mutations: {
    setLocale(state, payload) {
      state.locale = payload;
    },
  },
  actions: {
    setLocale({ commit }, payload) {
      commit('setLocale', payload);
    },
  },
  modules: {
  }
})
