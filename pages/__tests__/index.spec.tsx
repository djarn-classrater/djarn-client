import React from 'react'
import Index from '~/pages/index'
import { shallow, mount } from 'enzyme'

describe('Index page', () => {
  test('render test', () => {
    const wrapper = shallow(<Index userAgent="Render test"/>)
    expect(wrapper.exists()).toBe(true)
  })
})