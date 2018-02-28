import {takeLatest, call, put} from 'redux-saga/effects';
import {getUserInfo} from '../api';

import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../actions/user';


export function* fetchUserInfoSaga() {
  try {
    const user = yield call(getUserInfo);

    yield put(fetchUserSuccess(user.data.result));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserInfoWatch() {
  yield takeLatest(fetchUserRequest, fetchUserInfoSaga);
}