import {fetchUserInfoSaga} from '../user';
import {call, put} from 'redux-saga/effects';

import {fetchUserFailure, fetchUserSuccess} from '../../actions/user';
import {getUserInfo} from '../../api';


describe('User saga: ', () => {
  const response = {data: {result: {test: 'test'}}};
  const error = new Error('test');

  describe('successfull: ', () => {
    const saga = fetchUserInfoSaga();

    it('Step 1 expects to call service', () => {
      expect(saga.next().value).toEqual(call(getUserInfo));
    });

    it('Step 2 expects to put fetchUserSuccess action', () => {
      expect(saga.next(response).value).toEqual(put(fetchUserSuccess(response.data.result)));
    });
  });

  describe('failure: ', () => {
    const saga = fetchUserInfoSaga();

    it('Step 1 expects to call service', () => {
      expect(saga.next().value).toEqual(call(getUserInfo));
    });

    it('Step 2 expects to put fetchUserFailure action', () => {
        expect(saga.throw(error).value).toEqual(put(fetchUserFailure(error)));
    });
  });
});