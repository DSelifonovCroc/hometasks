import {createActions} from 'redux-actions';

export const {buyCurrencyRequest, buyCurrencySuccess, buyCurrencyFailure} = createActions(
  'BUY_CURRENCY_REQUEST', 
  'BUY_CURRENCY_SUCCESS', 
  'BUY_CURRENCY_FAILURE'
);

export const {sellCurrencyRequest, sellCurrencySuccess, sellCurrencyFailure} = createActions(
  'SELL_CURRENCY_REQUEST', 
  'SELL_CURRENCY_SUCCESS', 
  'SELL_CURRENCY_FAILURE'
);

export const {selectBtc, selectEth, selectOffset} = createActions(
  'SELECT_BTC', 
  'SELECT_ETH', 
  'SELECT_OFFSET'
);

export const {fetchBtcRequest, fetchBtcSuccess, fetchBtcFailure} = createActions(
  'FETCH_BTC_REQUEST', 
  'FETCH_BTC_SUCCESS', 
  'FETCH_BTC_FAILURE'
);

export const {fetchEthRequest, fetchEthSuccess, fetchEthFailure} = createActions(
  'FETCH_ETH_REQUEST', 
  'FETCH_ETH_SUCCESS', 
  'FETCH_ETH_FAILURE'
);