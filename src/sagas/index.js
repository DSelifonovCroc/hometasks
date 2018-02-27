import {fork} from 'redux-saga/effects';
import {authWatch, authFlow, logoutWatch} from './auth';
import {fetchUserInfoWatch} from './user';
import {fetchUserTransactionsWatch} from './transactions';
import {currencyWatch, fetchBtcWatch, fetchEthWatch, fetchWalletWatch, buyCurrencyWatch, sellCurrencyWatch} from './currency';


export default function*() {
  yield fork(authWatch);
  yield fork(authFlow);
  yield fork(logoutWatch);

  yield fork(fetchUserInfoWatch);
  yield fork(fetchUserTransactionsWatch);

  yield fork(currencyWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(fetchWalletWatch);

  yield fork(buyCurrencyWatch);
  yield fork(sellCurrencyWatch);
}
