import {MOVE_ORDER_TO_CUSTOMER} from './../actions/farmTypes'; 
import {MOVE_ORDER_TO_FARM} from './../actions/marketTypes';

export default function farm(state = {orders: []}, action){
    switch (action.type) {
        case MOVE_ORDER_TO_CUSTOMER:
            return {...state, orders: state.orders.filter(e => e.id !== action.payload.id)};
        case MOVE_ORDER_TO_FARM:
            return {...state, orders: [...state.orders, action.payload]};
        default:
            return state;
        }
}