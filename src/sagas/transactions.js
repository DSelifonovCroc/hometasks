import {takeLatest, call, put} from 'redux-saga/effects';
import {getUserTransactions} from '../api';

import {fetchTransactionsRequest, fetchTransactionsSuccess, fetchTransactionsFailure} from '../actions/transactions';


export function* fetchUserTransactionsSaga() {
  try {
    const transactions = yield call(getUserTransactions);

    yield put(fetchTransactionsSuccess(transactions.data.result));
  } catch (error) {
    yield put(fetchTransactionsFailure(error));
  }
}

export function* fetchUserTransactionsWatch() {
  yield takeLatest(fetchTransactionsRequest, fetchUserTransactionsSaga);
}