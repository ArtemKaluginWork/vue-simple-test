import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Store from '@/views/Store.vue';
import { MUT_CHANGE_COUNT } from '../../src/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Store.vue', () => {
  let store;
  let actions;
  let getters;
  let state;
  let mutations;

  beforeEach(() => {
    actions = {
      ACT_CHANGE_COUNT: jest.fn(),
    };
    mutations = {
      [MUT_CHANGE_COUNT]: (state, value) => {
        state.count += value;
      },
    };
    getters = {
      currenCount: $state => `Count: ${$state.count}`,
    };
    state = {
      count: 0,
    };
    store = new Vuex.Store({
      state,
      actions,
      getters,
      mutations,
    });
  });
  it('call ACT_CHANGE_COUNT', () => {
    const wrapper = shallowMount(Store, { store, localVue });
    const button = wrapper.find('#decrement');
    button.trigger('click');
    expect(actions.ACT_CHANGE_COUNT).toHaveBeenCalled();
  });
  it('check count with getters', () => {
    const actual = getters.currenCount(state);
    expect(actual).toBe('Count: 0');
  });
  it('test mutations', () => {
    const localState = {
      count: 0,
    };
    mutations.MUT_CHANGE_COUNT(localState, -1);
    expect(localState).toEqual({
      count: -1,
    });
  });
});
