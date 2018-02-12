import {combineReducers} from 'redux';
import farm from './farm';
import market from './market';
import budget from './budget';

const rootReducer = combineReducers({
    market,
    farm,
    budget
});

export default rootReducer;