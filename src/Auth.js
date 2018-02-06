import React, {Component} from 'react';
import {authorizeUser, isAuthorized} from './AuthorizeApi';
import {Redirect} from 'react-router-dom';

class Auth extends Component {

  state = {
    isAuthorized,
    email: '',
    password: '',
    showError: false
  }

  handleSubmit = () => {
    const {email, password} = this.state;
    authorizeUser(email, password);

    isAuthorized ? this.props.history.push("/") : this.setState({showError: true});
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {email, password, showError} = this.state;
    return (
      <div>

        <div className="auth-form">
          <input name="email"     value={email}    onChange={this.handleChange} />
          <input name="password"  value={password} onChange={this.handleChange} />

          <button onClick={this.handleSubmit}>Submit</button>
        </div> 

        {showError && <p className="error">Wrong login or password</p>}

        {this.state.isAuthorized && <Redirect to="/" />}

      </div>
    );
  }
}

export default Auth;
