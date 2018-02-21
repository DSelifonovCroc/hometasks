import {fetchFollowersSaga} from '../followers';
import {put, call} from 'redux-saga/effects';

import {fetchFollowersRequest, fetchFollowersSuccess} from '../../actions/users';

import {getUserFollowers} from '../../api';


describe('followers saga: ', () => {
    const actionPayload = "test";
    const saga = fetchFollowersSaga(fetchFollowersRequest(actionPayload));

    it('Step 1 expects to call user api with parameter', () => {       
        expect(saga.next(fetchFollowersRequest).value).toEqual(call(getUserFollowers, actionPayload));
    });

    it('Step 2 expects to put fetchFollowersSuccess action', () => {
        expect(saga.next(fetchFollowersRequest).value).toEqual(put({type: fetchFollowersSuccess.toString()}));
    });
});