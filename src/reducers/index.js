import {combineReducers} from 'redux';

import network from './network';
import user from './users'; 
import followers from './followers'; 
import auth from './auth'; 

export default combineReducers({
  network,
  user,
  followers,
  auth
});