import {handleActions} from 'redux-actions';

import searchFetchActions from '../actions/search';

const request = searchFetchActions.searchRequest;
const success = searchFetchActions.searchSuccess;
const failure = searchFetchActions.searchFailure;

const initialState = {
    isFetching: false,
    isFetched: false,
    series: [],
    error: null
}

const search = handleActions({
    [request]: (state, action) => ({
        ...state, isFetching: true, isFetched: false
    }),

    [success]: (state, action) => ({
        ...state, isFetching: false, isFetched: true, series: action.payload
    }),

    [failure]: (state, action) => ({
        ...state, isFetching: false, isFetched: true, error: action.error
    })
}, initialState);

export const getSeries = state => state.search.series;
export const getError = state => state.search.error;
export const getPendingStatus = state => state.search.isFetching;

export default search;