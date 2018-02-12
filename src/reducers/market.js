import {MOVE_ORDER_TO_FARM, CREATE_ORDER} from './../actions/marketTypes';

export default function market(state = {orders: []}, action){
    switch (action.type) {
        case CREATE_ORDER:
            return {...state, orders: [...state.orders, action.payload]};
        case MOVE_ORDER_TO_FARM:
            return {...state, orders: state.orders.filter(e => e.id !== action.payload.id)};
        default:
            return state;
        }
};
