import { mount } from '@vue/test-utils';
import Async from '@/views/Async';

describe('Async.vue', () => {
  const wrapper = mount(Async);
  it('render', () => {
    expect(wrapper.text()).toMatch('Loading...');
  });
  it('fetches async', (done) => {
    setTimeout(() => {
      expect(wrapper.html()).toMatch('PLAYERS');
      done();
    }, 3000);
  });
});
