import Vue from 'vue';
import Vuex from 'vuex';

export const ACT_CHANGE_COUNT = 'ACT_CHANGE_COUNT';

export const MUT_CHANGE_COUNT = 'MUT_CHANGE_COUNT';

Vue.use(Vuex);


export const mutations = {
  [MUT_CHANGE_COUNT]: (state, value) => {
    state.count += value;
  },
}
export const getters = {
  currenCount: state => `Count: ${state.count}`,
}

export default new Vuex.Store({
  state: {
    count: 0,

  },
  getters,
  mutations,
  actions: {
    [ACT_CHANGE_COUNT]: (context, value) => {
      context.commit('MUT_CHANGE_COUNT', value);
    },

  },
});
