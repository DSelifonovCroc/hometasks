import React from 'react';
import {mount} from 'enzyme';

import {MemoryRouter} from 'react-router-dom';

import {Followers} from '../Followers'


describe('Class methods:', () => {
  describe('Are defined:', () => {
    it('componentDidMount', () => {
        const wrapper = mount( <Followers followers={ { isFetching: false, followers: [] } } fetchFollowersRequest={jest.fn()} /> );

        expect(wrapper.instance().componentDidMount).toBeDefined();
    });
  });
});

describe('Representation:', () => {
    const followers = [
            {
                avatar_url: 'http://test1',
                login: 'test1'
            },
            {
                avatar_url: 'http://test2',
                login: 'test2'
            }
        ]

    it('Contains "loading data..." if props.isFetching == true', () => {
        const wrapper = mount( <Followers followers={ { isFetching: true, followers: [] } } fetchFollowersRequest={jest.fn()} /> );

        expect(wrapper.find('.loading')).toHaveLength(1);
    });

    it('Contains as many <Follower /> as sent in payload', () => {
        const wrapper = mount( 
            <MemoryRouter>
                <Followers followers={ { isFetching: false, followers } } fetchFollowersRequest={jest.fn()} />
            </MemoryRouter> 
        );

        expect(wrapper.find("Follower")).toHaveLength(2);
    });
});