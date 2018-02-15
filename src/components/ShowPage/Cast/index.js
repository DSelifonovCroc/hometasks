import React, {Component} from 'react';

class Cast extends Component {
  render() {
    const {name, image} = this.props.data;
    const imgSrc = image ? image.medium : ''

    return (
      <div className="t-person">
        <p>{name}</p>
        <img src={imgSrc} alt={name}/>
      </div>
    );
  }
}

export default Cast;
