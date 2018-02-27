import {authorizeFailure, authorizeRequest, authorizeSuccess, logout} from '../actions/auth';
import {takeLatest, put, call, select} from 'redux-saga/effects';

import {setTokenApi, clearTokenApi, login, registration} from '../api';

import {getIsAuthorized} from '../reducers/auth';
import {getTokenFromLocalStorage, setTokenToLocalStorage, removeTokenFromLocalStorage,} from '../localStorage';


function* authSaga(action) {
  try {
    const {email, password, isRegistered} = action.payload;
    const operation = isRegistered ? login : registration;

    const response = yield call(operation, {email, password});
    const token = response.data.jwt;

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield put(authorizeSuccess());

  } catch(error) {
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);

    yield put(authorizeFailure(error));
  }
}

export function* authFlow(){
  while(true){
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);

    if (!isAuthorized && localStorageToken) {
      yield call(setTokenApi, localStorageToken);
      yield call(setTokenToLocalStorage, localStorageToken);
      yield put(authorizeSuccess());
    }
  }
}

function* logoutSaga(){
  yield call(removeTokenFromLocalStorage);
  yield call(clearTokenApi);
}

export function* authWatch() {
  yield takeLatest(authorizeRequest, authSaga);
}

export function* logoutWatch() {
  yield takeLatest(logout, logoutSaga);
}