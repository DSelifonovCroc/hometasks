import React, { Component } from 'react';

class NewsPost extends Component {
  render() {
    const title = this.props.title;

    return (
      <div className="NewsPost">
        Hot News: {title}
      </div>
    );
  }
}

export default NewsPost;
