import React, {Component} from 'react';
import {connect} from 'react-redux';

import showsFetchActions from '../../actions/shows';
import {getShow, getError, getPendingStatus} from '../../reducers/shows';

import Cast from './Cast/index';


class ShowPage extends Component {

  componentDidMount(){
    this.props.request(this.props.match.params.id);
  }

  render() {
    const {isFetching, show, error} = this.props;
    const {name, url, image, summary, _embedded} = show;
    const imgSrc = image ? image.medium : '';
    const cast = _embedded ? _embedded.cast : [];

    if (isFetching){
      return <p className="fetching">Fetching data...</p>
    }

    if (error){
      return <p className="error">Error!!!</p>
    }

    return (
      <div className="show">
        <div>
          <a href={url}>{name}</a>
        </div>
        <div>
          <img src={imgSrc} alt={name} />
        </div>
        <div dangerouslySetInnerHTML={{__html: summary}}/>

        <div className="cast">
          {cast.length > 0 && cast.map( (item, index) => <Cast key={index} data={item.person} /> ) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      show: getShow(state),
      error: getError(state),
      isFetching: getPendingStatus(state)
  }
};

const request = showsFetchActions.showRequest;
const mapDispatchToProps = {request};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
