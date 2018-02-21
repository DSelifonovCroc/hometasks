import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import PrivateRoute from './PrivateRoute';
import AuthPage from './AuthPage';
import UserPage from './UserPage';

import {getIsNetworkErrorPresent, getNetworkError} from '../reducers/network';
import {getIsAuthorized} from '../reducers/auth';
import {logout} from '../actions/auth';


export class AppRouter extends Component {
  handleClick = () => {
    this.props.logout();
  } 

  render() {
    return (
      <div className="app">      
        {
          this.props.isAuthorized &&
          <div className="header">
            <div className="logout"><button onClick={this.handleClick}>Logout</button></div>
          </div>
        }

        {
          this.props.isError &&
          <div className="header">
            <div className="errors">{this.props.errorMessage}</div>
          </div>
        }        

        <div className="app-container">
          <Switch>
            <PrivateRoute path="/user/:name" component={UserPage} />
            <Route path="/login" component={AuthPage} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      isError: getIsNetworkErrorPresent(state),
      errorMessage: getNetworkError(state),
      isAuthorized: getIsAuthorized(state)
  }
};

const mapDispatchToProps = {logout};

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(AppRouter));
