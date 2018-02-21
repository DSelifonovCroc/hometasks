import React from 'react';
import {shallow} from 'enzyme';
import {Route, Switch} from 'react-router-dom';

import {AppRouter} from '../AppRouter'


describe('Component AppRouter:', () => {
  describe('Has a component:', () => {
    it('Switch', () => {
      const wrapper = shallow(<AppRouter />);

      expect(wrapper.find(Switch)).toHaveLength(1);
    });

    it('Route with path "/login"', () => {
      const wrapper = shallow(<AppRouter />);

      expect(wrapper.find(Route).props().path).toEqual("/login");
    });

    it('PrivateRoute with path "/user/:name"', () => {
      const wrapper = shallow(<AppRouter />);

      expect(wrapper.find("Connect(PrivateRoute)").props().path).toEqual("/user/:name");
    });
  });
});
