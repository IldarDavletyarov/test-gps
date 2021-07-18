import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: 'ru',
    markers: [],
  },
  mutations: {
    setLocale(state, payload) {
      state.locale = payload;
    },
    addMarker(state, payload) {
      state.markers.push(payload);
    },
  },
  actions: {
    setLocale({ commit }, payload) {
      commit('setLocale', payload);
    },
    addMarker({ commit }, payload) {
      commit('addMarker', payload);
    },
  },
  plugins: [
    createPersistedState(),
  ],
});
