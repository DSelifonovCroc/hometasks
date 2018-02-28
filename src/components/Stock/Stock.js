import React, {Fragment, Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TradeOperations from '../TradeOperations/TradeOperations';
import Wallet from '../Wallet/Wallet';
import Transactions from '../Transactions/Transactions';
import Chart from '../Chart/Chart';

import {logout} from '../../actions/auth';
import {fetchUserRequest} from '../../actions/user';
import {selectBtc, selectEth} from '../../actions/currency';
import {getUserInfo, getIsUserFetching} from '../../reducers/user';
import {getCurrencyData, getSelectedCurrency} from '../../reducers/currency';

import {currencies} from '../../constants';

import './Stock.css';
import logoWhite from './assets/Logo-white.svg';

class Stock extends Component {

  selectCurrency = symbol => {
    if (symbol === currencies.bitcoin){
      this.props.selectBtc();
    } else if (symbol === currencies.ethire){
      this.props.selectEth();
    }
  }

  componentDidMount(){
    this.props.fetchUserRequest();
    this.selectCurrency(this.props.match.params.symbol);
  }

  componentWillReceiveProps(next){
    const symbol = next.match.params.symbol;
    if (this.props.match.params.symbol === symbol) return;
    this.selectCurrency(symbol);
  }

  logout = () => {
    this.props.logout();
  }

  render() {
    const {isUserFetching, user, ethData, btcData, currency} = this.props;
    const btcCost = btcData ? btcData.purchase : 0;
    const ethCost = ethData ? ethData.purchase : 0;

    const currencyBlock = (name, cost) => {
      return (
        <div className="currency-link">
          {parseFloat(cost).toFixed(1)}
          <b>{name}</b>
        </div>
      );
    }

    return (
      <Fragment>
        <header className="header">
          <div className="content">
            <img src={logoWhite} alt="logo" />
            <div className="button-panel">
              {currency === 'eth' ? currencyBlock('ETH', ethCost): <Link to="eth">{currencyBlock('ETH', ethCost)}</Link>}
              {currency === 'btc' ? currencyBlock('BTC', btcCost) : <Link to="btc">{currencyBlock('BTC', btcCost)}</Link>} 
            </div>
            {(!isUserFetching && user) && <a onClick={this.logout}>{user.email}</a>}
          </div>
        </header>

        <main className="Stock">
          <div className="stock-wrapper">
            <article className="main-container">
              <section className="operations">
                <Wallet />
                <TradeOperations />
              </section>
              <section>
                <Chart />
                <Transactions />
              </section>
            </article>  
          </div>
        </main>

        <section className="footer">
          <div className="content">
            <p>Footer pack of beautifull words.</p>
            <img src={logoWhite} alt="logo" />
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: getUserInfo(state),
      isUserFetching: getIsUserFetching(state),
      btcData: getCurrencyData(state, 'btc'),
      ethData: getCurrencyData(state, 'eth'),
      currency: getSelectedCurrency(state)
  }
};

const mapDispatchToProps = {fetchUserRequest, logout, selectBtc, selectEth};

export default connect(mapStateToProps, mapDispatchToProps)(Stock);