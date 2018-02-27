import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchTransactionsRequest} from '../../actions/transactions';
import {getUserTransactions} from '../../reducers/transactions';
import {getSelectedCurrency} from '../../reducers/currency';

import Transaction from './Transaction';

import './Transactions.css';


class Transactions extends Component {

  componentDidMount(){
    this.props.fetchTransactionsRequest();
  }

  render() {
    const {records, error} = this.props.transactions;
    const currency = this.props.currency;

    const content = () => {
      const currentRecords = records ? records.filter(r => `${currency}_delta` in r) : [];

      if (error) {
        return (<tbody><tr><td rowSpan="4">Transactions were not being loaded properly.</td></tr></tbody>)
      }

      return (
        <tbody>
          {currentRecords.length > 0 && currentRecords.map( (item, index) => <Transaction key={index} data={item} currency={currency} /> )}
        </tbody>
      )
    }

    return (
      <article>
        <table>
          <thead>
            <tr>
              <th>Операция</th>
              <th>Дата</th>
              <th>{currency.toUpperCase()}</th>
              <th>USD</th>
            </tr>
          </thead>
            {content()} 
        </table>
      </article>
    );

  }
}

const mapStateToProps = state => {
  return {
      transactions: getUserTransactions(state),
      currency: getSelectedCurrency(state)
  }
};

const mapDispatchToProps = {fetchTransactionsRequest};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);