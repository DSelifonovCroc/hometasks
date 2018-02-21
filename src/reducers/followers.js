import {handleActions} from 'redux-actions';

import {fetchFollowersRequest, fetchFollowersFailure, fetchFollowersSuccess} from '../actions/users';

const initialState = {
    isFetching: false,
    isFetched: false,
    followers: [],
    error: null
}

const followers = handleActions({
    [fetchFollowersRequest]: (state, action) => ({
        ...state, isFetching: true, isFetched: false, followers: [], error: null
    }),

    [fetchFollowersSuccess]: (state, action) => ({
        ...state, isFetching: false, isFetched: true, followers: action.payload, error: null
    }),

    [fetchFollowersFailure]: (state, action) => ({
        ...state, isFetching: false, isFetched: true, error: action.error, followers: []
    })
}, initialState);

export default followers;

export const getFollowers = state => state.followers;