import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchWalletRequest} from '../../actions/wallet';
import {getWallet} from '../../reducers/wallet';

import {ClipLoader} from 'react-spinners';
import './Wallet.css';


class Wallet extends Component {

  componentDidMount(){
    this.props.fetchWalletRequest();
  }

  render() {
    const {coins, isFetching} = this.props.wallet;

    if (coins && !isFetching){
      const regExp = /\./;
      const {usd, eth, btc} = this.props.wallet.coins;
      const usdArr = usd.toString().split(regExp);
      const ethArr = eth.toString().split(regExp);
      const btcArr = btc.toString().split(regExp);

      return (
        <div className="Wallet">
          <h2>Ваш счет</h2>
  
          <div className="wallet-item">
            <div className="wallet-item__coin">
              <span className="coin-integer">{usdArr[0]}</span>
              {usdArr.length > 1 && <span className="coin-fraction">.{usdArr[1]}</span>}
            </div>
            <p className="currency-name">$</p>
          </div>

          <div className="wallet-item">
            <div className="wallet-item__coin">
              <span className="coin-integer">{ethArr[0]}</span>
              {ethArr.length > 1 && <span className="coin-fraction">.{ethArr[1]}</span>}
            </div>
            <p className="currency-name">ETH</p>
          </div>

          <div className="wallet-item">
            <div className="wallet-item__coin">
              <span className="coin-integer">{btcArr[0]}</span>
              {btcArr.length > 1 && <span className="coin-fraction">.{btcArr[1]}</span>}
            </div>
            <p className="currency-name">BTC</p>
          </div>
  
        </div>
      );
    }

    return <ClipLoader loading={isFetching} color="#91A8D0" />   
  }
}

const mapStateToProps = state => {
  return {
      wallet: getWallet(state)
  }
};

const mapDispatchToProps = {fetchWalletRequest};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);