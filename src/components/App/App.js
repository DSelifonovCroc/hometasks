import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import PrivateRoute from './helpers/PrivateRoute';
import StockRouter from '../Stock/StockRouter';
import LoginPage from '../LoginPage/LoginPage';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PrivateRoute path="/trade" component={StockRouter} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
