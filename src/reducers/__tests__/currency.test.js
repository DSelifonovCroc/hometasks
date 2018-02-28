import currency from '../currency';
import {
  selectBtc, selectEth, selectOffset,
  fetchBtcRequest, fetchBtcSuccess, fetchBtcFailure,
  fetchEthRequest, fetchEthSuccess, fetchEthFailure
} from '../../actions/currency';

import {currencies} from '../../constants';

import {
  reducerFailureTest, 
  reducerValueTest, 
  reducerClearFieldTest
} from '../../utils/testHelpers';

describe('currency reducer', () => {
  describe('selectBtc action... ', () => {
    reducerValueTest(currency, selectBtc, 'selected', currencies.bitcoin);
  });

  describe('selectEth action... ', () => {
    reducerValueTest(currency, selectEth, 'selected', currencies.ethire);
  });

  describe('selectOffset action... ', () => {
    reducerValueTest(currency, selectOffset, 'offset');
  });

  describe('fetchBtcRequest action... ', () => {
    reducerValueTest(currency, fetchBtcRequest, 'isBtcFetching', true);
    reducerClearFieldTest(currency, fetchBtcRequest, 'error');
  });

  describe('fetchBtcFailure action... ', () => {
    reducerValueTest(currency, fetchBtcFailure, 'isBtcFetching', false);
    reducerFailureTest(currency, fetchBtcFailure);
  });

  describe('fetchBtcSuccess action... ', () => {
    reducerValueTest(currency, fetchBtcSuccess, 'isBtcFetching', false);
    reducerValueTest(currency, fetchBtcSuccess, 'btc');
    reducerClearFieldTest(currency, fetchBtcSuccess, 'error');
  });


  describe('fetchEthRequest action... ', () => {
    reducerValueTest(currency, fetchBtcRequest, 'isBtcFetching', true);
    reducerClearFieldTest(currency, fetchBtcRequest, 'error');
  });

  describe('fetchEthFailure action... ', () => {
    reducerValueTest(currency, fetchEthFailure, 'isEthFetching', false);
    reducerFailureTest(currency, fetchEthFailure);
  });

  describe('fetchEthSuccess action... ', () => {
    reducerValueTest(currency, fetchEthSuccess, 'isEthFetching', false);
    reducerValueTest(currency, fetchEthSuccess, 'eth');
    reducerClearFieldTest(currency, fetchEthSuccess, 'error');
  });
});