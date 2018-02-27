import {combineReducers} from 'redux';

import auth from './auth'; 
import user from './user'; 
import wallet from './wallet'; 
import transactions from './transactions'; 
import currency from './currency'; 

export default combineReducers({
  auth, wallet, user, transactions, currency
});