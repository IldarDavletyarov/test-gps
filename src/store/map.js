export default {
  state: {
    markers: [],
  },
  mutations: {
    addMarker(state, payload) {
      state.markers.push(payload); // разделить на мейн и маркер
    },
  },
  actions: {
    addMarker({ commit }, payload) {
      commit('addMarker', payload);
    },
  },
};
