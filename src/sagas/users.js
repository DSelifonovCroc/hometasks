import {takeLatest, call, put} from 'redux-saga/effects';
import {getUserInformation, getTokenOwner} from '../api';

import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../actions/users';
import request from './request';


export function* fetchUserSaga(action) {
  try {
    const name = action.payload;
    let user;

    if (name === 'me'){
      user = yield call(request, getTokenOwner);
    } else {
      user = yield call(request, getUserInformation, action.payload);
    }

    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, fetchUserSaga);
}
