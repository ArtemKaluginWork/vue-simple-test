import Vue from 'vue';
import Vuex from 'vuex';

export const ACT_CHANGE_COUNT = 'ACT_CHANGE_COUNT';

export const MUT_CHANGE_COUNT = 'MUT_CHANGE_COUNT';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,

  },
  getters: {
    currenCount: state => `Count: ${state.count}`,
  },
  mutations: {
    [MUT_CHANGE_COUNT]: (state, value) => {
      state.count += value;
    },
  },
  actions: {
    [ACT_CHANGE_COUNT]: (context, value) => {
      context.commit('MUT_CHANGE_COUNT', value);
    },

  },
});
