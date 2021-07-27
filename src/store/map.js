import { saveMarkers } from '@/modules/markers/api';

export default {
  state: {
    markers: [],
  },
  mutations: {
    addMarker(state, payload) {
      state.markers.push(payload);
    },
  },
  actions: {
    async updateMarkers({ state: { markers } }) {
      try {
        await saveMarkers(markers);
      } catch(error) {
        console.error(error);
      }
    },
    addMarker({ commit, dispatch }, payload) {
      commit('addMarker', payload);
      dispatch('updateMarkers');
    },
  },
};
