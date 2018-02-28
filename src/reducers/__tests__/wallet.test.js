import wallet from '../wallet';

import {reducerFailureTest, reducerValueTest} from '../../utils/testHelpers';

import {fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure} from '../../actions/wallet';
import {buyCurrencySuccess, buyCurrencyFailure, sellCurrencySuccess, sellCurrencyFailure} from '../../actions/currency';

describe('wallet reducer', () => {
  describe('fetchWalletRequest action... ', () => {
    reducerValueTest(wallet, fetchWalletRequest, 'isFetching', true);
  });

  describe('fetchWalletFailure action... ', () => {
    reducerValueTest(wallet, fetchWalletFailure, 'isFetching', false);
    reducerFailureTest(wallet, fetchWalletFailure);
  });

  describe('fetchWalletSuccess action... ', () => {
    reducerValueTest(wallet, fetchWalletSuccess, 'coins');
  });

  describe('buyCurrencyFailure action... ', () => {
    reducerFailureTest(wallet, buyCurrencyFailure);
  });

  describe('buyCurrencySuccess action... ', () => {
    reducerValueTest(wallet, buyCurrencySuccess, 'coins');
  });

  describe('sellCurrencyFailure action... ', () => {
    reducerFailureTest(wallet, sellCurrencyFailure);
  });

  describe('sellCurrencySuccess action... ', () => {
    reducerValueTest(wallet, sellCurrencySuccess, 'coins');
  });
});