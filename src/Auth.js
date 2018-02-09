import React, {Component} from 'react';
import {authorizeUser, isAuthorized} from './AuthorizeApi';
import {Redirect} from 'react-router-dom';

class Auth extends Component {

  state = {
    isAuthorized: isAuthorized,
    email: '',
    password: '',
    showError: false
  }

  handleSubmit = () => {
    const {email, password} = this.state;
    const authorized = authorizeUser(email, password);

    this.setState({isAuthorized: authorized, showError: !authorized});
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {email, password, showError} = this.state;
    return (
      <div>

        {this.state.isAuthorized && <Redirect from="/auth" to="/" />}

        <div className="auth-form">
          <input name="email"     value={email}    onChange={this.handleChange} />
          <input name="password"  value={password} onChange={this.handleChange} />

          <button onClick={this.handleSubmit}>Submit</button>
        </div> 

        {showError && <p className="error">Wrong login or password</p>}

      </div>
    );
  }
}

export default Auth;
