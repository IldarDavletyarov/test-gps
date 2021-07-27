import Vue from 'vue';
import Vuex from 'vuex';

// vuex modules
import main from './main';
import map from './map';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main,
    map,
  },
  plugins: [
    createPersistedState(),
  ],
});
