import {handleActions} from 'redux-actions';

import {authorize, logout} from '../actions/auth';

const initialState = {
    isAuthorized: false
}

const auth = handleActions({
    [authorize]: (state, action) => ({
        ...state, isAuthorized: true
    }),

    [logout]: (state, action) => ({
        ...state, isAuthorized: false
    })
}, initialState);

export default auth;


export const getIsAuthorized = state => state.auth.isAuthorized;