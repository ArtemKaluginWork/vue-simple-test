import { mount } from '@vue/test-utils';
import State from '@/views/State.vue';

describe('State.vue', () => {
  const wrapper = mount(State);
  it('render', () => {
    expect(wrapper.text()).toMatch('STATE');
  });
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<button id="increment">+</button>');
  });
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });
  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find('button');
    button.trigger('click');
    button.trigger('click');
    expect(wrapper.vm.count).toBe(2);
  });
  it('button click should decrement the count', () => {
    expect(wrapper.vm.count).toBe(2);
    const button = wrapper.find('#decrement');
    button.trigger('click');
    button.trigger('click');
    expect(wrapper.vm.count).toBe(0);
  });
});
