import React, {Component} from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';

import Auth from './Auth';
import Home from './Home';
import Private from './Private';
import Public from './Public';

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({isAuthorized});
  };

  render() {
    const {isAuthorized} = this.state;
    return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/private">Секретная страница</Link></li>
          <li><Link to="/public">Публичная страница</Link></li>
          <li><Link to="/auth">Войти</Link></li>
        </ul>
      </nav>
   
      <hr />
   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/public" component={Public} />
        <Route path="/auth" component={Auth} />
        {isAuthorized ? (
          <Route path="/private" component={Private} />
          ) : (
          <Redirect from="/private" to="/auth" />
          
        )}
        {!isAuthorized && <Redirect from="*" to="/" />}
      </Switch>
    </div>
    );
  }
}

export default App;
