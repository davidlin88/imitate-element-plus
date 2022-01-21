import { mount } from '@vue/test-utils'
import HelloWorld from '../src/hello-world.vue'

describe('HelloWorld.vue', () => {
  test('type', () => {
    const wrapper = mount(HelloWorld)
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('de-hello-world')).toEqual(true)
  })
})
