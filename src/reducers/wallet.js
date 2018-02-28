import {handleActions} from 'redux-actions';

import {fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure} from '../actions/wallet';
import {
    buyCurrencyRequest, buyCurrencySuccess, buyCurrencyFailure,
    sellCurrencyRequest, sellCurrencySuccess, sellCurrencyFailure
  } from '../actions/currency';

const initialState = {
    coins: null,
    error: null,
    isFetching: false
}

const wallet = handleActions({
    [fetchWalletRequest]: (state, action) => ({
        ...state, isFetching: true
    }),

    [fetchWalletSuccess]: (state, action) => ({
        ...state, isFetching: false, coins: action.payload
    }),

    [fetchWalletFailure]: (state, action) => ({
        ...state, isFetching: false, error: action.payload
    }),

    // buy

    [buyCurrencyRequest]: (state, action) => ({
        ...state
    }),

    [buyCurrencySuccess]: (state, action) => ({
        ...state, error: null, coins: action.payload
    }),

    [buyCurrencyFailure]: (state, action) => ({
        ...state, error: action.payload
    }),

    // sell

    [sellCurrencyRequest]: (state, action) => ({
        ...state
    }),

    [sellCurrencySuccess]: (state, action) => ({
        ...state, error: null, coins: action.payload
    }),

    [sellCurrencyFailure]: (state, action) => ({
        ...state, error: action.payload
    })
}, initialState);

export default wallet;

export const getError = state => state.wallet.error;
export const getWallet = state => state.wallet;