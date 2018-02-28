import React, { Fragment, Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getIsAuthorized, getAuthError} from '../../reducers/auth';
import {authorizeRequest} from '../../actions/auth';

import './LoginPage.css';
import logo from './assets/Logo.svg';
import userLogo from './assets/user-shape.svg';
import padlockLogo from './assets/padlock-unlock.svg';

import Particles from 'react-particles-js';
import particlesParams from '../../particles-params';


export class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    isRegistered: true
  }

  linkClick = () =>{
    this.setState({isRegistered: !this.state.isRegistered});
  }

  handleClick = () => {
    this.props.authorizeRequest(this.state);
  }

  inputChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }

  render() {
    const error = this.props.error;

    if (this.props.isAuthorized){
      return <Redirect to="/trade/btc" />
    } 

    return (
      <Fragment>
        <div className="login-page">
          <div className="content">
            <img src={logo} alt="cryptostock"/>

            { error && <div className="block"><div className="error"><p>{error.message || error.data.message}</p></div></div>}

            <div className="block">
              <div className="form">
                <div className="input login">
                  <span style={{backgroundImage: `url(${userLogo})`}}></span>
                  <input onChange={this.inputChange} value={this.state.email} name="email" />
                </div>
                <div className="input password">
                  <span style={{backgroundImage: `url(${padlockLogo})`}}></span>
                  <input onChange={this.inputChange} value={this.state.password} name="password" type="password" />
                </div>

                <button onChange={this.inputChange} onClick={this.handleClick}>{this.state.isRegistered ? 'Login' : 'Register'}</button>
              </div>
            </div>

            <div className="block"> 
              { this.state.isRegistered  ?
                <p>Have not got an account? <a onClick={this.linkClick}>Register!</a></p> :
                <p>Already with us? <a onClick={this.linkClick}>Sign in!</a></p>
              }              
            </div>
          </div>
        </div>
        <Particles params={particlesParams} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
      isAuthorized: getIsAuthorized(state),
      error: getAuthError(state)
  }
};

const mapDispatchToProps = {authorizeRequest};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
