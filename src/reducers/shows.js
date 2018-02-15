import {handleActions} from 'redux-actions';

import showsFetchActions from '../actions/shows';

const request = showsFetchActions.showRequest;
const success = showsFetchActions.showSuccess;
const failure = showsFetchActions.showFailure;

const initialState = {
    isFetching: false,
    isFetched: false,
    show: {},
    error: null
}

const show = handleActions({
    [request]: (state, action) => ({
        ...state, isFetching: true, isFetched: false
    }),

    [success]: (state, action) => ({
        ...state, isFetching: false, isFetched: true, show: action.payload
    }),

    [failure]: (state, action) => ({
        ...state, isFetching: false, isFetched: true, error: action.error
    })
}, initialState);

export const getShow = state => state.shows.show;
export const getError = state => state.shows.error;
export const getPendingStatus = state => state.shows.isFetching;

export default show;