import {handleActions} from 'redux-actions';

import {authorizeRequest, authorizeFailure, authorizeSuccess, logout} from '../actions/auth';

const initialState = {
    isAuthorized: false
}

const auth = handleActions({
    [authorizeRequest]: (state, action) => ({
        ...state, isAuthorized: false, isFetching: true
    }),

    [authorizeFailure]: (state, action) => ({
        ...state, isAuthorized: false, isFetching: false, error: action.payload
    }),

    [authorizeSuccess]: (state, action) => ({
        ...state, isAuthorized: true, isFetching: false
    }),

    [logout]: (state, action) => ({
        ...state, isAuthorized: false, isFetching: false
    })
}, initialState);

export default auth;

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getAuthError = state => state.auth.error;
