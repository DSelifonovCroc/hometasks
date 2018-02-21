import React from 'react';
import {mount} from 'enzyme';

import {MemoryRouter} from 'react-router-dom';

import Follower from '../Follower'


describe('Representation:', () => {
    const follower = {
                avatar_url: 'http://test1',
                login: 'test1'
            };

    it('Contains avatar with propper src', () => {
        const wrapper = mount( 
            <MemoryRouter>
                <Follower data={ follower } /> 
            </MemoryRouter>
        );

        expect(wrapper.find('.follower-logo img').props().src).toEqual(follower.avatar_url);
    });

    it('Contains propper login', () => {
        const wrapper = mount( 
            <MemoryRouter>
                <Follower data={ follower } /> 
            </MemoryRouter>
        );

        expect(wrapper.find('.follower-description h3').text()).toEqual(follower.login);
    });

    it('Contains propper link to follower', () => {
        const wrapper = mount( 
            <MemoryRouter>
                <Follower data={ follower } /> 
            </MemoryRouter>
        );

        expect(wrapper.find('Link').props().to).toEqual(`/user/${follower.login}`);
    });
});