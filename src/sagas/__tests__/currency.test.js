import {
  loginCurrencyFlow,
  fetchBtcFlow,
  fetchEthFlow,
  fetchWalletFlow,
  buyCurrencyFlow,
  sellCurrencyFlow
} from '../currency';
import {select, call, put} from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {
  fetchBtcRequest, fetchBtcSuccess, fetchBtcFailure,
  fetchEthRequest, fetchEthSuccess, fetchEthFailure,
  buyCurrencySuccess, buyCurrencyFailure,
  sellCurrencySuccess, sellCurrencyFailure
} from '../../actions/currency';
import {fetchWalletSuccess, fetchWalletFailure} from '../../actions/wallet';
import {fetchTransactionsRequest} from '../../actions/transactions';
import {getOffset} from '../../reducers/currency';

import {buyCurrency, sellCurrency, getWallet, candles} from '../../api';


describe('Currency sagas: ', () => {
  const error = new Error('test');

  describe('loginCurrencyFlow: ', () => {
    const saga = loginCurrencyFlow();

    it('Step 1 expects to select getOffset', () => {
      expect(saga.next().value).toEqual(select(getOffset));
    });

    it('Step 2 expects to put fetchWalletSuccess action', () => {
      expect(saga.next().value).toEqual(put(fetchBtcRequest()));
    });

    it('Step 3 expects to put fetchWalletSuccess action', () => {
      expect(saga.next().value).toEqual(put(fetchEthRequest()));
    });

    it('Step 4 expects to delay for 15 seconds', () => {
      expect(saga.next().value).toEqual(call(delay, 15000));
    });
  });

  describe('fetchWalletFlow saga: ', () => {
    const response = {data: {result: {test: 'test'}}};
  
    describe('successfull: ', () => {
      const saga = fetchWalletFlow();
  
      it('Step 1 expects to call getWallet', () => {
        expect(saga.next().value).toEqual(call(getWallet));
      });
  
      it('Step 2 expects to put fetchWalletSuccess action', () => {
        expect(saga.next(response).value).toEqual(put(fetchWalletSuccess(response.data.result)));
      });
    });
  
    describe('failure: ', () => {
      const saga = fetchWalletFlow();
  
      it('Step 1 expects to call getWallet', () => {
        expect(saga.next().value).toEqual(call(getWallet));
      });
  
      it('Step 2 expects to put fetchWalletFailure action', () => {
          expect(saga.throw(error).value).toEqual(put(fetchWalletFailure(error)));
      });
    });
  });

  describe('fetchBtcFlow saga: ', () => {
    const payload = {test: 'test'} 
    const response = {data: {result: {test: 'test'}}};
  
    describe('successfull: ', () => {
      const saga = fetchBtcFlow({payload});
  
      it('Step 1 expects to call candles', () => {
        expect(saga.next().value).toEqual(call(candles, 'btc', payload));
      });
  
      it('Step 2 expects to put fetchBtcSuccess action', () => {
        expect(saga.next(response).value).toEqual(put(fetchBtcSuccess(response.data.result)));
      });
    });
  
    describe('failure: ', () => {
      const saga = fetchBtcFlow({payload});
  
      it('Step 1 expects to call candles', () => {
        expect(saga.next().value).toEqual(call(candles, 'btc', payload));
      });
  
      it('Step 2 expects to put fetchBtcFailure action', () => {
          expect(saga.throw(error).value).toEqual(put(fetchBtcFailure(error)));
      });
    });
  });

  describe('fetchEthFlow saga: ', () => {
    const payload = {test: 'test'} 
    const response = {data: {result: {test: 'test'}}};
  
    describe('successfull: ', () => {
      const saga = fetchEthFlow({payload});
  
      it('Step 1 expects to call candles', () => {
        expect(saga.next().value).toEqual(call(candles, 'eth', payload));
      });
  
      it('Step 2 expects to put fetchEthSuccess action', () => {
        expect(saga.next(response).value).toEqual(put(fetchEthSuccess(response.data.result)));
      });
    });
  
    describe('failure: ', () => {
      const saga = fetchEthFlow({payload});
  
      it('Step 1 expects to call candles', () => {
        expect(saga.next().value).toEqual(call(candles, 'eth', payload));
      });
  
      it('Step 2 expects to put fetchEthFailure action', () => {
          expect(saga.throw(error).value).toEqual(put(fetchEthFailure(error)));
      });
    });
  });

  describe('buyCurrencyFlow saga: ', () => {
    const payload = {selectedCurrency: 'eth', value: 1} 
    const response = {data: {result: {test: 'test'}}};

    describe('successfull: ', () => {
      const saga = buyCurrencyFlow({payload});

      it('Step 1 expects to call buyCurrency', () => {
        expect(saga.next().value).toEqual(call(buyCurrency, payload.selectedCurrency, payload.value));
      });

      it('Step 2 expects to call getWallet', () => {
        expect(saga.next().value).toEqual(call(getWallet));
      });
    
      it('Step 3 expects to put buyCurrencySuccess', () => {
        expect(saga.next(response).value).toEqual(put(buyCurrencySuccess(response.data.result)));
      });

      it('Step 4 expects to put fetchTransactionsRequest', () => {
        expect(saga.next().value).toEqual(put(fetchTransactionsRequest()));
      });
    });

    describe('failure: ', () => {
      const saga = buyCurrencyFlow({payload});

      it('Step 1 expects to call buyCurrency', () => {
        expect(saga.next().value).toEqual(call(buyCurrency, payload.selectedCurrency, payload.value));
      });

      it('Step 2 expects to put buyCurrencyFailure', () => {
        expect(saga.throw(error).value).toEqual(put(buyCurrencyFailure(error)));
      });
    });
  });

  describe('sellCurrencyFlow saga: ', () => {
    const payload = {selectedCurrency: 'eth', value: 1} 
    const response = {data: {result: {test: 'test'}}};

    describe('successfull: ', () => {
      const saga = sellCurrencyFlow({payload});

      it('Step 1 expects to call sellCurrency', () => {
        expect(saga.next().value).toEqual(call(sellCurrency, payload.selectedCurrency, payload.value));
      });

      it('Step 2 expects to call getWallet', () => {
        expect(saga.next().value).toEqual(call(getWallet));
      });
    
      it('Step 3 expects to put sellCurrencySuccess', () => {
        expect(saga.next(response).value).toEqual(put(sellCurrencySuccess(response.data.result)));
      });

      it('Step 4 expects to put fetchTransactionsRequest', () => {
        expect(saga.next().value).toEqual(put(fetchTransactionsRequest()));
      });
    });

    describe('failure: ', () => {
      const saga = sellCurrencyFlow({payload});

      it('Step 1 expects to call sellCurrency', () => {
        expect(saga.next().value).toEqual(call(sellCurrency, payload.selectedCurrency, payload.value));
      });

      it('Step 2 expects to put sellCurrencyFailure', () => {
        expect(saga.throw(error).value).toEqual(put(sellCurrencyFailure(error)));
      });
    });
  });
});