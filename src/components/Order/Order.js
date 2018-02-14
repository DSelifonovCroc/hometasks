import React, {Component} from 'react';
import './Order.css';

class Order extends Component{

    render(){
        const {name, price, createdAt} = this.props.data;

        return (
            <div className="order">        
                <div className="order__upper">
                    <p className="p--order">Название: {name}</p>
                    <p className="p--order">Цена: <span className="order-price">{price}</span></p>
                </div>

                <div className="order__lower">
                    <p className="p--order">Создан: {createdAt.toUTCString()}</p>
                </div>
            </div>
        );
    }
}

export default Order;