import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getBudget} from './../../reducers/budget';

import './Budget.css';

class Budget extends Component{

    render(){
        const {profit, marketExpanse, deliveryExpanse, farmExpanse} = this.props.budget;
        const total = profit - marketExpanse - deliveryExpanse - farmExpanse;

        return (
            <div className="budget">
                <h2>Бюджет</h2>

                <p>Всего получено денег: <span className="t-profit">{profit}</span></p>
                <p>Расходы продавцов: <span className="t-sellers">{0 -marketExpanse}</span></p>
                <p>Расходы на ферме: <span className="t-farm">{0 - farmExpanse}</span></p>
                <p>Расходы на доставку: <span className="t-delivery">{0 - deliveryExpanse}</span></p>
                <p>Итого: <span className="t-total">{total}</span></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        budget: getBudget(state)
    }
  };
    
export default connect(mapStateToProps)(Budget);
