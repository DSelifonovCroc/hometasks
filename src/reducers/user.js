import {handleActions} from 'redux-actions';

import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../actions/user';

const initialState = {
    isFetching: false,
    info: null,
    error: null
}

const user = handleActions({
    [fetchUserRequest]: (state, action) => ({
        ...state, isFetching: true, info: null, error: null
    }),

    [fetchUserSuccess]: (state, action) => ({
        ...state, isFetching: false, info: action.payload.data.result, error: null
    }),

    [fetchUserFailure]: (state, action) => ({
        ...state, isFetching: false, error: action.error
    })
}, initialState);

export default user;

export const getUserInfo = state => state.user.info;
export const getIsUserFetching = state => state.user.isFetching;