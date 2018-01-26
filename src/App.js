import React, { Component } from 'react';
import './App.css';
import './NewsPost';
import NewsPost from './NewsPost';

class App extends Component {

  state = {
      value: '',
      news: []
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  createNews = event => {
    const {value, news} = this.state;
    let newsposts = news.slice();

    newsposts.push(value);
    this.setState({news: newsposts, value: ''});
  };

  render() {
    const {value, news} = this.state;

    return (
      <div className="App">
        <div className="App-controls">
          <input onChange={this.handleChange} value={value} />
          <button onClick={this.createNews}>Create news</button>
        </div>
        
        <div className="App-news-holder">
          {news.map(n => (
            <NewsPost key={n} title={n} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
