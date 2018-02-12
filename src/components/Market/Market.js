import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createOrder, moveOrderToFarm} from './../../actions/marketActions';
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

export class Market extends Component {
  render() {
    let newOrder = getNewOrder()
    const {createOrder, moveOrderToFarm, market} = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        
        <button onClick={() => createOrder(newOrder)} className="new-orders__create-button">Создать заказ</button>
        <button onClick={() => moveOrderToFarm(market[0])} >Отправить заказ на ферму</button>

        <div className="order-list">{ market.map((item, index) => <Order key={index} data={item} />) }</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    market: state.market.orders
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder: payload => {
      dispatch(createOrder(payload))
    },
    moveOrderToFarm: payload => {
      dispatch(moveOrderToFarm(payload))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
