import {fetchUserSaga} from '../users';
import {put, call} from 'redux-saga/effects';

import {fetchUserRequest, fetchUserSuccess} from '../../actions/users';
import request from '../request';

import {getUserInformation, getTokenOwner} from '../../api';

describe('Users saga: ', () => {
    describe('Saga for current user: ', () => {
        const actionPayload = "me";
        const saga = fetchUserSaga(fetchUserRequest(actionPayload));

        it('Step 1 expects to call user api function getTokenOwner with no parameter', () => {       
            expect(saga.next(fetchUserRequest).value).toEqual(call(request, getTokenOwner));
        });

        it('Step 2 expects to put fetchUserSuccess action', () => {
            expect(saga.next(fetchUserRequest).value).toEqual(put(fetchUserSuccess(fetchUserRequest)));
        });
    });

    describe('Saga for other users: ', () => {
        const actionPayload = "test";
        const saga = fetchUserSaga(fetchUserRequest(actionPayload));

        it('Step 1 expects to call user api function getUserInformation with parameter', () => {       
            expect(saga.next(fetchUserRequest).value).toEqual(call(request, getUserInformation, actionPayload));
        });

        it('Step 2 expects to put fetchUserSuccess action', () => {
            expect(saga.next(fetchUserRequest).value).toEqual(put(fetchUserSuccess(fetchUserRequest)));
        });
    });
});