export default {
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
};
