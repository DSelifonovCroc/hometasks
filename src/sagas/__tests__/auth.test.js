import {authFlow} from '../auth';
import {take, select, call} from 'redux-saga/effects';

import {fetchUserRequest} from '../../actions/users';
import {logout} from '../../actions/auth';
import {getIsAuthorized} from '../../reducers/auth';

import {setTokenApi, clearTokenApi} from '../../api';

import {getTokenFromLocalStorage, setTokenToLocalStorage, removeTokenFromLocalStorage,} from '../../localStorage';

describe('authFlow saga: ', () => {
    const saga = authFlow();

    it('Step 1 expects to select value from getIsAuthorized', () => {
        expect(saga.next(fetchUserRequest).value).toEqual(select((getIsAuthorized)));
    });

    it('Step 2 expects to select value from getTokenFromLocalStorage', () => {
        expect(saga.next(fetchUserRequest).value).toEqual(call((getTokenFromLocalStorage)));
    });

    it('Step 3 expects to set token to instance using setTokenApi', () => {
        expect(saga.next(fetchUserRequest).value).toEqual(call(setTokenApi, undefined));
    });

    it('Step 4 expects to set token to localStorage using setTokenToLocalStorage', () => {
        expect(saga.next(fetchUserRequest).value).toEqual(call(setTokenToLocalStorage, undefined));
    });

    it('Step 5 expects to wait logout', () => {
        expect(saga.next(fetchUserRequest).value).toEqual(take(logout));
    });

    it('Step 6 expects to remove token from localStorage using removeTokenFromLocalStorage', () => {
        expect(saga.next(fetchUserRequest).value).toEqual(call(removeTokenFromLocalStorage));
    });

    it('Step 7 expects to remove token from instance using clearTokenApi', () => {
        expect(saga.next(fetchUserRequest).value).toEqual(call(clearTokenApi));
    });
});