/* global expect */

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', function() {

  it('renders hello javascript message', function() {
    var wrapper = shallow(<App />)
    const result = wrapper.containsMatchingElement(
      <h1>hello from javascript!</h1>
    )
    expect(result).toBeTruthy()
  })
  
})
