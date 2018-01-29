import React, { Component } from 'react';
import './App.css';
import './NewsPost';
import NewsPost from './NewsPost';

class App extends Component {

  state = {
      newsInput: '',
      news: []
  }

  handleChange = event => {
    this.setState({newsInput: event.target.value});
  };

  handleNewPost = event => {
    const {newsInput, news} = this.state;
    let newnews = {text: newsInput}
    
    this.setState({news: [...news, newnews], newsInput: ''});
  };

  render() {
    const {newsInput, news} = this.state;

    return (
      <div className="App">
        <div className="App-controls">
          <input onChange={this.handleChange} value={newsInput} />
          <button onClick={this.handleNewPost}>Create news</button>
        </div>
        
        <div className="App-news-holder">
          {news.map((n, i) => (
            <NewsPost key={i} text={n.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
