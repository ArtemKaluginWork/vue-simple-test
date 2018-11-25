import { mount } from '@vue/test-utils';
import Props from '../../src/components/Props.vue';

describe('Props.vue', () => {
  const wrapper = mount(Props, {
    propsData: {
      msg: 'QQZ',
    },
  });
  it('render', () => {
    expect(wrapper.text()).toMatch('QQZ');
  });
});
