import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {authorize} from '../actions/auth';
import {getIsAuthorized} from '../reducers/auth';

export class AuthPage extends Component {
    state = {
        inputVal: ''
    }

    handleChange = event => {
        this.setState({inputVal: event.target.value})
    }

    handleKeyPress = event => {
        if (event.key === 'Enter'){
            this.props.authorize(this.state.inputVal);
        }
    }

    render() {
        if (this.props.isAuthorized){
            return <Redirect to="/user/me" />
        }

        return (
            <div className="auth">
                <p>Получить токен нужно на своей странице github, перейдите по <a href="https://github.com/settings/tokens">адресу</a> и создать себе токен. Запишите куда нибудь токен, так как после создания доступ к нему будет только один раз.</p>
                <input placeholder="auth_token" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                <p>После ввода нажать Enter</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthorized: getIsAuthorized(state)
    }
  };
  
const mapDispatchToProps = {authorize};

export default connect( mapStateToProps, mapDispatchToProps )(AuthPage);
