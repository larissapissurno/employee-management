import Vue from 'vue';
import Vuex from 'vuex';

import authentication from './authentication.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication,
  },
});
