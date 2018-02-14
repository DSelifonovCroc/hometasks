import React, {Component} from 'react';
import {connect} from 'react-redux';

import {moveOrderToCustomer} from './../../actions/farmActions';
import {getFarmOrders} from './../../reducers/farm';
import Order from './../Order/Order';

import './Farm.css';

class Farm extends Component{

    handleClick = item => {
        const {moveOrderToCustomer, farm} = this.props;

        moveOrderToCustomer(farm[0]);
    }

    render(){
        const {farm} = this.props;
        let noOrders = farm.length === 0;

        return (
            <div className="farm">
                <h2>Производство на ферме</h2>

                <button onClick={this.handleClick} disabled={noOrders}>Отправить урожай клиенту</button>
        
                <div className="order-list">
                    { farm.map( (item, index) => <Order key={index} data={item} /> ) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        farm: getFarmOrders(state)
    }
  };
  
const mapDispatchToProps = {
    moveOrderToCustomer
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Farm);
