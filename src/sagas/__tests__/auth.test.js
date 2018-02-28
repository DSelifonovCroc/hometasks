import {logoutSaga, authFlow, authSaga} from '../auth';
import {select, call, put} from 'redux-saga/effects';

import {authorizeSuccess, authorizeFailure} from '../../actions/auth';
import {getIsAuthorized} from '../../reducers/auth';
import {setTokenApi, clearTokenApi, login} from '../../api';
import {setTokenToLocalStorage, removeTokenFromLocalStorage, getTokenFromLocalStorage} from '../../localStorage';


describe('Authorization saga: ', () => {
  describe('logoutSaga saga: ', () => {
    const saga = logoutSaga();

    it('Step 1 expects to call removeTokenFromLocalStorage', () => {
      expect(saga.next().value).toEqual(call(removeTokenFromLocalStorage));
    });
  
    it('Step 2 expects to call clearTokenApi', () => {
        expect(saga.next().value).toEqual(call(clearTokenApi));
    });

  });

  describe('authFlow saga: ', () => {
    const token = 'test';
    const payload = {token};

    const saga = authFlow({isAuthorized: false, localStorageToken: token});

    it('Step 1 expects to select getIsAuthorized value', () => {
      expect(saga.next().value).toEqual(select(getIsAuthorized));
    });
  
    it('Step 2 expects to call getTokenFromLocalStorage', () => {
        expect(saga.next().value).toEqual(call(getTokenFromLocalStorage));
    });

    it('Step 3 expects to set token to instance using setTokenApi', () => {
      expect(saga.next({payload}).value).toEqual(call(setTokenApi, {payload}));
    });

    it('Step 4 expects to set token to local storage using setTokenToLocalStorage action', () => {
      expect(saga.next({payload}).value).toEqual(call(setTokenToLocalStorage, {payload}));
    });

    it('Step 5 expects to put token authorizeSuccess action', () => {
      expect(saga.next().value).toEqual(put(authorizeSuccess()));
    });

  });

  describe('authSaga saga: ', () => {
    const auth = {email: 'hakuna', password: 'matata'}
    const payload = {...auth, isRegistered: true};
    const token = null;
    const error = new Error('test');

    describe('successfull: ', () => {
      const saga = authSaga({payload});

      it('Step 1 expects to call service', () => {
        expect(saga.next().value).toEqual(call(login, auth));
      });
    
      it('Step 2 expects to set token to instance using setTokenApi', () => {
          expect(saga.next({payload: token}).value).toEqual(call(setTokenApi, token));
      });

      it('Step 3 expects to set token to local storage using setTokenToLocalStorage', () => {
        expect(saga.next({payload: token}).value).toEqual(call(setTokenToLocalStorage, token));
      });

      it('Step 4 expects to put authorizeSuccess action', () => {
        expect(saga.next().value).toEqual(put(authorizeSuccess()));
      });
    });


    describe('failure: ', () => {
      const saga = authSaga({payload});

      it('Step 1 expects to call service', () => {
        expect(saga.next().value).toEqual(call(login, auth));
      });

      it('Step 2 expects to call removeTokenFromLocalStorage', () => {
          expect(saga.throw(error).value).toEqual(call(removeTokenFromLocalStorage));
      });

      it('Step 3 expects to call clearTokenApi', () => {
        expect(saga.next({payload: token}).value).toEqual(call(clearTokenApi));
      });

      it('Step 4 expects to put token authorizeFailure action', () => {
        expect(saga.next().value).toEqual(put(authorizeFailure(error)));
      });
    });
  });
});