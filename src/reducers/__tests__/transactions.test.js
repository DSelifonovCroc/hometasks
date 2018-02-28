import transactions from '../transactions';
import {fetchTransactionsRequest, fetchTransactionsSuccess, fetchTransactionsFailure} from '../../actions/transactions';

import {
  reducerFailureTest,
  reducerValueTest, 
  reducerClearFieldTest
} from '../../utils/testHelpers';

describe('transactions reducer', () => {

  describe('fetchTransactionsRequest action... ', () => {
    reducerValueTest(transactions, fetchTransactionsRequest, 'isFetching', true);
    reducerClearFieldTest(transactions, fetchTransactionsRequest, 'error');
  });

  describe('fetchTransactionsFailure action... ', () => {
    reducerValueTest(transactions, fetchTransactionsFailure, 'isFetching', false);
    reducerFailureTest(transactions, fetchTransactionsFailure);
  });

  describe('fetchTransactionsSuccess action... ', () => {
    reducerValueTest(transactions, fetchTransactionsSuccess, 'isFetching', false);
    reducerValueTest(transactions, fetchTransactionsSuccess, 'records');
    reducerClearFieldTest(transactions, fetchTransactionsSuccess, 'error');
  });
});