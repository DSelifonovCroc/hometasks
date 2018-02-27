import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {offsets} from '../../constants';
import {selectOffset} from '../../actions/currency';
import {getSelectedCurrencyStock, exportGetIsCurrentCurrencyFetching} from '../../reducers/currency';

import {LineChart} from 'react-easy-chart';
import {ClipLoader} from 'react-spinners';

import './Chart.css';


class Transactions extends Component {

  changeOffset = (event) => {
    this.props.selectOffset(offsets[event.target.textContent]);
  }

  render() {
    const {currency, isFetching} = this.props;

    const chartData = () => {
      if (currency && !isFetching){
        return (
          <LineChart
            lineColors={['#034F84', '#F7786B']}
            axes
            grid
            verticalGrid
            interpolate={'cardinal'}
            xType={'time'}
            datePattern={'%d-%m %H:%M'}
            width={750}
            height={400}
            style={{
            '.axis path': {
                stroke: '#EDF0F1',
            },
            }}
            data={[
              currency.map(c => ({x: moment(c.mts).format('DD-MM HH:mm'), y: c.sell})),
              currency.map(c => ({x: moment(c.mts).format('DD-MM HH:mm'), y: c.purchase})),
            ]}
        />
        );
      }

      return <ClipLoader loading={true} color="#91A8D0" />
    }

    return (
      <article className="chart-wrapper">
        <h2>Котировки</h2>
        <div className="Chart">
          <div className="offsets">
            {Object.keys(offsets).map(key => <button key={key} onClick={this.changeOffset}>{key}</button>)}
          </div>
          {chartData()}
        </div>
      </article>
    ); 
  }
}

const mapStateToProps = state => {
  return {
      currency: getSelectedCurrencyStock(state),
      isFetching: exportGetIsCurrentCurrencyFetching(state)
  }
};

const mapDispatchToProps = {selectOffset};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);