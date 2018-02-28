import React from 'react';
import {shallow} from 'enzyme';

import {LoginPage} from '../LoginPage/LoginPage'
import {methodIsDefined} from '../../utils/testHelpers';
 
describe('Class methods:', () => {
  describe('Are defined:', () => {
    const wrapper = shallow( <LoginPage/> );

    methodIsDefined(wrapper, 'linkClick');
    methodIsDefined(wrapper, 'handleClick');
    methodIsDefined(wrapper, 'inputChange');
  });
});

describe('check callbacks', () => {
  const wrapper = shallow(<LoginPage />);
  const testData = 'test';

  it('email input change', () => {
    wrapper.find('input[name="email"]').simulate('change', {target: {name: 'email', value: testData}});
    wrapper.update();
    expect(wrapper.state().email).toEqual(testData);
  });

  it('password input change', () => {
    wrapper.find('input[name="password"]').simulate('change', {target: {name: 'password', value: testData}});
    wrapper.update();
    expect(wrapper.state().password).toEqual(testData);
  });

  it('register switcher link click', () => {
    const isRegistered = wrapper.state().isRegistered;
    wrapper.find('.block a').simulate('click');
    wrapper.update();
    expect(wrapper.state().isRegistered).toEqual(!isRegistered);
  });
});