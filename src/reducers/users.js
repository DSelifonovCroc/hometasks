import {handleActions} from 'redux-actions';

import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../actions/users';

const initialState = {
    isFetching: false,
    isFetched: false,
    user: null,
    error: null
}

const user = handleActions({
    [fetchUserRequest]: (state, action) => ({
        ...state, isFetching: true, isFetched: false, user: null, error: null
    }),

    [fetchUserSuccess]: (state, action) => ({
        ...state, isFetching: false, isFetched: true, user: action.payload, error: null
    }),

    [fetchUserFailure]: (state, action) => ({
        ...state, isFetching: false, isFetched: false, error: action.error
    })
}, initialState);

export default user;

export const getUsers = state => state.user;