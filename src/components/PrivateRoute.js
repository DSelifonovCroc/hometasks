import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import {getIsAuthorized} from '../reducers/auth';

export const PrivateRoute = ({component: Component, isAuthorized, ...rest}) => ( 
    <Route {...rest} render={ props => isAuthorized ? <Component {...props} /> : <Redirect to="/login" /> } />
);

export default connect( state => ({isAuthorized: getIsAuthorized(state)}) )(PrivateRoute);
