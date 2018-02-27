import {takeLatest, fork, take, select, put, cancel, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {candles, getWallet, buyCurrency, sellCurrency} from '../api';
import {getOffset} from '../reducers/currency';

import {authorizeSuccess, logout} from '../actions/auth';
import {fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure} from '../actions/wallet';
import {changeLocation} from '../actions/location';
import {fetchTransactionsRequest} from '../actions/transactions';
import {
  selectBtc, selectEth, selectOffset,
  fetchBtcRequest, fetchBtcSuccess, fetchBtcFailure,
  fetchEthRequest, fetchEthSuccess, fetchEthFailure,
  buyCurrencyRequest, buyCurrencySuccess, buyCurrencyFailure,
  sellCurrencyRequest, sellCurrencySuccess, sellCurrencyFailure
} from '../actions/currency';


function* fetchBtcFlow(action) {
  try {
    const response = yield call(candles, 'btc', action.payload);
    yield put(fetchBtcSuccess(response.data.result));
  } catch (error) {
    yield put(fetchBtcFailure(error));
  }
}

function* fetchEthFlow(action) {
  try {
    const response = yield call(candles, 'eth', action.payload);
    yield put(fetchEthSuccess(response.data.result));
  } catch (error) {
    yield put(fetchEthFailure(error));
  }
}

function* loginCurrencyFlow() {
  while (true) {
    const offset = yield select(getOffset);
    yield put(fetchBtcRequest(offset));
    yield put(fetchEthRequest(offset));

    yield delay(15000);
  }
}

export function* currencyWatch() {
  let currencyTask;
  while (true) {
    const action = yield take([authorizeSuccess, logout, selectBtc, selectEth, selectOffset, changeLocation]);

    if (currencyTask) {
      yield cancel(currencyTask);
      currencyTask = undefined;
    }
    if (action.type !== logout.toString()) currencyTask = yield fork(loginCurrencyFlow);
  }
}

function* fetchWalletFlow() {
  try {
    const response = yield call(getWallet);
    yield put(fetchWalletSuccess(response));
  } catch (error) {
    yield put(fetchWalletFailure(error));
  }
}

export function* fetchWalletWatch() {
  yield takeLatest(fetchWalletRequest, fetchWalletFlow);
}

export function* fetchBtcWatch() {
  yield takeLatest(fetchBtcRequest, fetchBtcFlow);
}

export function* fetchEthWatch() {
  yield takeLatest(fetchEthRequest, fetchEthFlow);
}

// BUY CURRENCY

function* buyCurrencyFlow(action) {
  try {
    const {selectedCurrency, value} = action.payload;
    yield call(buyCurrency, selectedCurrency, value);

    const response = yield call(getWallet);
    yield put(buyCurrencySuccess(response));
    
    yield put(fetchTransactionsRequest());
  } catch (error) {
    yield put(buyCurrencyFailure(error));
  }
}

export function* buyCurrencyWatch() {
  yield takeLatest(buyCurrencyRequest, buyCurrencyFlow);
}

// SELL CURRENCY

function* sellCurrencyFlow(action) {
  try {
    const {selectedCurrency, value} = action.payload;
    yield call(sellCurrency, selectedCurrency, value);

    const response = yield call(getWallet);
    yield put(sellCurrencySuccess(response));

    yield put(fetchTransactionsRequest());
  } catch (error) {
    yield put(sellCurrencyFailure(error));
  }
}

export function* sellCurrencyWatch() {
  yield takeLatest(sellCurrencyRequest, sellCurrencyFlow);
}