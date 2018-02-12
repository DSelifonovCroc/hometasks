import {MOVE_ORDER_TO_CUSTOMER} from './../actions/farmTypes'; 
import {MOVE_ORDER_TO_FARM, CREATE_ORDER} from './../actions/marketTypes';

const initState = {
    marketExpanse: 0,
    deliveryExpanse: 0,
    farmExpanse: 0,
    profit: 0
}

export default function budget(state = initState, action){
    switch (action.type) {
        case CREATE_ORDER:
            return {...state, profit: state.profit + action.payload.price, marketExpanse: state.marketExpanse + 20};
        case MOVE_ORDER_TO_CUSTOMER:
            return {...state, deliveryExpanse: state.deliveryExpanse + 20};
        case MOVE_ORDER_TO_FARM:
            return {...state, farmExpanse: state.farmExpanse + 100};
        default:
            return state;
        }
}