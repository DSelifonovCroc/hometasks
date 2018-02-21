import requestSaga from '../request';
import {put, select, call} from 'redux-saga/effects';

import {getIsNetworkErrorPresent} from '../../reducers/network';
import {networkError} from '../../actions/network';


describe('request saga: ', () => {
    const saga = requestSaga(jest.fn(), {});

    it('Step 1 expects to call passed function with arguments', () => {
        const res = saga.next(networkError).value;
        const exp = call(jest.fn(), {});
        
        expect(JSON.stringify(res)).toEqual(JSON.stringify(exp));
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