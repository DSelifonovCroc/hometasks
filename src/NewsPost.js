import React, { Component } from 'react';

class NewsPost extends Component {
  render() {
    const text = this.props.text;

    return (
      <div className="NewsPost">
        <p>{text}</p>
      </div>
    );
  }
}

export default NewsPost;
