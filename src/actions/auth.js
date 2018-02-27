import {createActions} from 'redux-actions';

export const {authorizeRequest, authorizeSuccess, authorizeFailure, logout} = createActions(
  'AUTHORIZE_REQUEST', 
  'AUTHORIZE_SUCCESS', 
  'AUTHORIZE_FAILURE',
  'LOGOUT'
);
