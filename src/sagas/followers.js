import {takeLatest, call, put} from 'redux-saga/effects';
import {getUserFollowers} from '../api';

import {fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure} from '../actions/users';


export function* fetchFollowersSaga(action) {
  try {
    const response = yield call(getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(response.data));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}
