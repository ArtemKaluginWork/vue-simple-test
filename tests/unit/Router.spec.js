import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

import App from '../../src/App.vue';
import State from '../../src/views/State.vue';
import Async from '../../src/views/Async.vue';


const localVue = createLocalVue();
localVue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: State,
  },
  {
    path: '/async',
    name: 'async',
    component: Async,
  },
];


describe('App.vue', () => {
  const router = new VueRouter({ routes });
  const wrapper = mount(App, { localVue, router });
  it('render', () => {
    expect(wrapper.text()).toMatch('App');
  });
  it('router leave to /', () => {
    router.push('/');
    expect(wrapper.find(State).exists()).toBe(true);
  });
  it('router leave to /async', () => {
    router.push('/async');
    expect(wrapper.find(Async).exists()).toBe(true);
  });
});
