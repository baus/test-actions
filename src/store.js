import Vue from 'vue';
import Vuex from 'vuex';
import yields from './modules/yields.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    yields,
  },
});
