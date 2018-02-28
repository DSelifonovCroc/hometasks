import {fetchUserTransactionsSaga} from '../transactions';
import {call, put} from 'redux-saga/effects';

import {fetchTransactionsFailure, fetchTransactionsSuccess} from '../../actions/transactions';
import {getUserTransactions} from '../../api';


describe('Transactions saga: ', () => {
  const response = {data: {result: {test: 'test'}}};
  const error = new Error('test');

  describe('successfull: ', () => {
    const saga = fetchUserTransactionsSaga();

    it('Step 1 expects to call service', () => {
      expect(saga.next().value).toEqual(call(getUserTransactions));
    });

    it('Step 2 expects to put fetchTransactionsSuccess action', () => {
      expect(saga.next(response).value).toEqual(put(fetchTransactionsSuccess(response.data.result)));
    });
  });

  describe('failure: ', () => {
    const saga = fetchUserTransactionsSaga();

    it('Step 1 expects to call service', () => {
      expect(saga.next().value).toEqual(call(getUserTransactions));
    });

    it('Step 2 expects to put fetchTransactionsFailure action', () => {
        expect(saga.throw(error).value).toEqual(put(fetchTransactionsFailure(error)));
    });
  });
});