import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Store from '@/views/Store.vue';

const localVue = createLocalVue();
localVue.use(Vuex);


describe('Store.vue', () => {
  const mutations = {
    MUT_CHANGE_COUNT: jest.fn(),
  };
  const actions = {
    ACT_CHANGE_COUNT: jest.fn(),
  };
  const store = new Vuex.Store({ mutations, actions });
  it('don\'t commits a mutation when a button is clicked', () => {
    const wrapper = shallowMount(Store, {
      store, localVue,
    });
    wrapper.find('#decrement').trigger('click');
    expect(mutations.MUT_CHANGE_COUNT).not.toHaveBeenCalledWith(
      {},
      -190,
    );
  });
  it('commits a mutation when a button is clicked', () => {
    const wrapper = shallowMount(Store, {
      store, localVue,
    });
    wrapper.find('button').trigger('click');
    expect(mutations.MUT_CHANGE_COUNT).toHaveBeenCalledWith(
      {},
      1,
    );
  });
});
