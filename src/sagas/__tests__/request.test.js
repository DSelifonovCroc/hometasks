import requestSaga from '../request';
import {put, select, call} from 'redux-saga/effects';

import {getIsNetworkErrorPresent} from '../../reducers/network';
import {networkError} from '../../actions/network';
import {fetchFollowersSuccess} from '../../actions/users';
import {logout} from '../../actions/auth';


describe('request saga: ', () => {

    describe('successfull ', () => {
        const followers = [{login: 'test'}];
        const saga = requestSaga(fetchFollowersSuccess, followers);

        it('Step 1 expects to call passed function with arguments', () => {
            expect(saga.next(networkError).value).toEqual(call(fetchFollowersSuccess, followers));
        });

        it('Step 2 expects to select error value using getIsNetworkErrorPresent', () => {
            expect(saga.next(networkError).value).toEqual(select(getIsNetworkErrorPresent));
        });

        it('Step 3 expects to clear error data if exists using clearNetworkErrors action', () => {
            expect(saga.next(networkError).value).toEqual(put({"type": "CLEAR_NETWORK_ERRORS"}));
        });

        it('Step 4 expects to get the network error', () => {
            expect(saga.next(networkError).value).toEqual(networkError);
        });
    });

    describe('with network error ', () => {
        const error = {response: {status: 401}}
        const saga = requestSaga(fetchFollowersSuccess, []);

        it('Step 1 expects to call passed function with arguments', () => {
            expect(saga.next().value).toEqual(call(fetchFollowersSuccess, []));
        });

        it('Step 2 expects to put networkError action', () => {
            expect(saga.throw(error).value).toEqual(put(networkError(error)));
        });

        it('Step 3 expects put logout action', () => {
            expect(saga.next().value).toEqual(put(logout()));
        });
    });
});
