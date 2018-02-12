import React, {Component} from 'react';
import {connect} from 'react-redux';

import {moveOrderToCustomer} from './../../actions/farmActions';
import Order from './../Order/Order';

import './Farm.css';

class Farm extends Component{

    render(){
        const {moveOrderToCustomer, farm} = this.props;

        return (
            <div className="farm">
                <h2>Производство на ферме</h2>

                <button onClick={() => moveOrderToCustomer(farm[0])}>Отправить урожай клиенту</button>
        
                <div className="order-list">{ farm.map((item, index) => <Order key={index} data={item} />) }</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        farm: state.farm.orders
    }
  };
  
const mapDispatchToProps = dispatch => {
    return {
        moveOrderToCustomer: payload => {
            dispatch(moveOrderToCustomer(payload))
        }     
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Farm);