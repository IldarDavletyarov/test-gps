import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import store from './store'

import messages from './messages';

Vue.config.productionTip = false

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: store.state.locale,
  messages,
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
