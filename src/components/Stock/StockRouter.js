import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Stock from './Stock';

class StockRouter extends Component {
  render() {
    return (
      <div className="StockRouter">
        <Switch>
          <Route path="/trade/:symbol" component={Stock} />
          <Redirect to="/trade/eth" />
        </Switch>
      </div>
    );
  }
}

export default StockRouter;
