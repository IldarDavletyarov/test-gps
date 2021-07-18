import { shallowMount } from '@vue/test-utils';

import Map from '@/views/Map';
import { yandexMap } from 'vue-yandex-maps'

import store from '@/store';


describe('Map Page', () => {
  const wrapper = shallowMount(Map, {
    mocks: {
      $t: (msg) => msg,
      $store: store,
    },
  });
  it('Contain Yandex Map', () => {
    expect(wrapper.findComponent(yandexMap).exists()).toBeTruthy()
  })
})
