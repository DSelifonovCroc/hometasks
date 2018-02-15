import React, {Component} from 'react';
import {connect} from 'react-redux';

import searchFetchActions from '../../actions/search';
import {getSeries, getError, getPendingStatus} from '../../reducers/search';

import Series from './Series/index'

class Search extends Component {
  state = {
    inputValue: ''
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value});
  }

  handleClick = () => {
    this.props.request(this.state.inputValue);
  }

  render() {
    const {isFetching, series, error} = this.props;

    if (isFetching){
      return <p className="fetching">Fetching data...</p>
    }

    if (error){
      return <p className="error">Error!!!</p>
    }

    return (
      <div className="search">
        <div className="search-control">
          <input placeholder="название сериала" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Найти</button>
        </div>

        <div className="t-search-result">
          {series && series.map( (item, index) => <Series key={index} data={item} /> ) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      series: getSeries(state),
      error: getError(state),
      isFetching: getPendingStatus(state)
  }
};

const request = searchFetchActions.searchRequest;
const mapDispatchToProps = {request};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
