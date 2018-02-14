import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createOrder, moveOrderToFarm} from './../../actions/marketActions';
import {getMarketOrders} from './../../reducers/market';

import Order from './../Order/Order';

import './Market.css';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

class Market extends Component {

  newOrderClick = () => {
    const newOrder = getNewOrder();
    this.props.createOrder(newOrder);
  }

  toFarmClick = () => {
    const {market} = this.props;
    this.props.moveOrderToFarm(market[0])
  }

  render() {
    const {market} = this.props;
    const onOrders = market.length === 0

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        
        <button onClick={this.newOrderClick} className="new-orders__create-button">Создать заказ</button>
        <button onClick={this.toFarmClick} disabled={onOrders}>Отправить заказ на ферму</button>

        <div className="order-list">
          { market.map( (item, index) => <Order key={index} data={item} /> ) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    market: getMarketOrders(state)
  }
};

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
