import {handleActions} from 'redux-actions';
import {capitalizeFirstLetter} from '../projectUtils';

import {
    selectBtc, selectEth, selectOffset,
    fetchBtcRequest, fetchBtcSuccess, fetchBtcFailure,
    fetchEthRequest, fetchEthSuccess, fetchEthFailure
  } from '../actions/currency';

import {offsets, currencies} from '../constants';



const initialState = {
    offset: offsets['4ч'],
    selected: currencies.ethire,
    btc: [],
    eth: [],
    isBtcFetching: false,
    isEthFetching: false,
}

const currency = handleActions({
    [selectBtc]: (state, action) => ({
        ...state, selected: currencies.bitcoin
    }),

    [selectEth]: (state, action) => ({
        ...state, selected: currencies.ethire
    }),

    [selectOffset]: (state, action) => ({
        ...state, offset: action.payload
    }),

    // bitcoin 

    [fetchBtcRequest]: (state, action) => ({
        ...state, isBtcFetching: true,error: null
    }),

    [fetchBtcSuccess]: (state, action) => ({
        ...state, isBtcFetching: false, btc: action.payload, error: null
    }),

    [fetchBtcFailure]: (state, action) => ({
        ...state, isBtcFetching: false, error: action.payload
    }),
    
    // ethire

    [fetchEthRequest]: (state, action) => ({
        ...state, isEthFetching: true, error: null
    }),

    [fetchEthSuccess]: (state, action) => ({
        ...state, isEthFetching: false, error: null, eth: action.payload
    }),

    [fetchEthFailure]: (state, action) => ({
        ...state, isEthFetching: false, error: action.payload
    })
}, initialState);

export default currency;

export const getOffset = state => state.currency.offset;
export const getSelectedCurrency = state => state.currency.selected;

export const getCurrencyData = (state, symbol=null) => {
    const currency = symbol? symbol : getSelectedCurrency(state);
    const costs = state.currency[currency];

    return costs.length > 0 ? costs[0] : null;
}

export const getCurrentCurrencyPurchase = state => {
    const currencyData = getCurrencyData(state);

    return currencyData ? currencyData.purchase : 0;
}

export const getCurrentCurrencySell = state => {
    const currencyData = getCurrencyData(state);

    return currencyData ? currencyData.sell : 0;
}

export const exportGetIsCurrentCurrencyFetching = state => {
    let currency = getSelectedCurrency(state);
    currency = capitalizeFirstLetter(currency);

    return state.currency[`is${currency}Fetching`];
}

export const getSelectedCurrencyStock = state => {
    const currency = getSelectedCurrency(state);

    return state.currency[currency];
}