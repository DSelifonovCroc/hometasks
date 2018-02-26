import {authFlow} from '../auth';
import {take, select, call} from 'redux-saga/effects';

import {fetchUserRequest} from '../../actions/users';
import {logout, authorize} from '../../actions/auth';
import {getIsAuthorized} from '../../reducers/auth';

import {setTokenApi, clearTokenApi} from '../../api';

import {getTokenFromLocalStorage, setTokenToLocalStorage, removeTokenFromLocalStorage,} from '../../localStorage';

describe('authFlow saga: ', () => {
    const saga = authFlow();
    const token = "test";

    it('Step 1 expects to select value from getIsAuthorized', () => {
        expect(saga.next().value).toEqual(select(getIsAuthorized));
    });

    it('Step 2 expects to select value from getTokenFromLocalStorage', () => {
        expect(saga.next().value).toEqual(call(getTokenFromLocalStorage));
    });

    it("step 3 expects to take authorize action", () => {
        expect(saga.next().value).toEqual(take(authorize));
    });

    it('Step 4 expects to set token to instance using setTokenApi', () => {
        expect(saga.next({payload: token}).value).toEqual(call(setTokenApi, token));
    });

    it('Step 5 expects to set token to localStorage using setTokenToLocalStorage', () => {
        expect(saga.next().value).toEqual(call(setTokenToLocalStorage, token));
    });

    it('Step 6 expects to wait logout', () => {
        expect(saga.next().value).toEqual(take(logout));
    });

    it('Step 7 expects to remove token from localStorage using removeTokenFromLocalStorage', () => {
        expect(saga.next().value).toEqual(call(removeTokenFromLocalStorage));
    });

    it('Step 8 expects to remove token from instance using clearTokenApi', () => {
        expect(saga.next().value).toEqual(call(clearTokenApi));
    });
});