import React from 'react';
import {shallow} from 'enzyme';

import {UserPage} from '../UserPage'


describe('Class methods:', () => {
  describe('Are defined:', () => {
    it('componentDidMount', () => {
        const wrapper = shallow( 
            <UserPage 
                user={{ isFetching: false } } 
                fetchUserRequest={jest.fn()} 
                match={{params: {name: 'test'}}} 
            /> 
        );

        expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('componentWillReceiveProps', () => {
        const wrapper = shallow( 
            <UserPage 
                user={{ isFetching: false } } 
                fetchUserRequest={jest.fn()} 
                match={{params: {name: 'test'}}} 
            /> 
        );

        expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
    });

  });
});

describe('Representation:', () => {
    const user = {
        avatar_url: 'http://test',
        login: 'test',
        followers: 22,
        public_repos: 0
    }

    it('Contains "loading data..." if props.isFetching == true', () => {
        const wrapper = shallow( 
            <UserPage 
                user={{ isFetching: true } } 
                fetchUserRequest={jest.fn()} 
                match={{params: {name: 'test'}}} 
            /> 
        );

        expect(wrapper.find('.loading')).toHaveLength(1);
    });

    it('contains "no suach user found if props.user == null"', () => {
        const wrapper = shallow( 
            <UserPage 
                user={{ isFetching: false, user: null } } 
                fetchUserRequest={jest.fn()} 
                match={{params: {name: 'test'}}} 
            /> 
        );

        expect(wrapper.find('.no-user')).toHaveLength(1);
    });

    it('contains user avatar', () => {        
        const wrapper = shallow( 
            <UserPage 
                user={{ isFetching: false, user: {data: user} } } 
                fetchUserRequest={jest.fn()} 
                match={{params: {name: 'test'}}} 
            /> 
        );

        expect(wrapper.find('.user-data-logo img').props().src).toEqual(user.avatar_url);
    });

    it('contains user login', () => {        
        const wrapper = shallow( 
            <UserPage 
                user={{ isFetching: false, user: {data: user} } } 
                fetchUserRequest={jest.fn() } 
                match={{params: {name: 'test'}}} 
            /> 
        );

        expect(wrapper.find('.user-data-description h3').text()).toEqual(user.login);
    });

    it('contains user followers number', () => {        
        const wrapper = shallow( 
            <UserPage 
                user={{ isFetching: false, user: {data: user} } } 
                fetchUserRequest={jest.fn()} 
                match={{params: {name: 'test'}}} 
            /> 
        );

        expect(wrapper.find('p').at(0).text()).toEqual(`Followers number: ${user.followers}`);
    });
    
    it('contains user public repos number', () => {        
        const wrapper = shallow( 
            <UserPage 
                user={{ isFetching: false, user: {data: user} } } 
                fetchUserRequest={jest.fn()} 
                match={{params: {name: 'test'}}} 
            /> 
        );

        expect(wrapper.find('p').at(1).text()).toEqual(`Public repos number: ${user.public_repos}`);
    });
});