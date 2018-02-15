import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Series extends Component {
  render() {
    const {id, name, summary, image} = this.props.data;
    const imgSrc = image ? image.medium : ''

    return (
      <div className="t-preview">
        <div>
          <Link className="t-link" to={`/shows/${id}`}>{name}</Link>
        </div>
        <div>
          <img src={imgSrc} alt={name}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: summary}}/>
      </div>
    );
  }
}

export default Series;
