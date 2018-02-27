import {handleActions} from 'redux-actions';
import {fetchTransactionsRequest, fetchTransactionsSuccess, fetchTransactionsFailure} from '../actions/transactions';

const initialState = {
    isFetching: false,
    records: [],
    error: null
}

const transactions = handleActions({
    [fetchTransactionsRequest]: (state, action) => ({
        ...state, isFetching: true, error: null
    }),

    [fetchTransactionsSuccess]: (state, action) => ({
        ...state, isFetching: false, records: action.payload.data.result, error: null
    }),

    [fetchTransactionsFailure]: (state, action) => ({
        ...state, isFetching: false, error: action.error
    })
}, initialState);

export default transactions;

export const getUserTransactions = state => state.transactions;