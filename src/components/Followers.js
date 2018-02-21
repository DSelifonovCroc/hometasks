import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchFollowersRequest} from '../actions/users';
import {getFollowers} from '../reducers/followers';

import Follower from './Follower';


export class Followers extends Component {
    componentDidMount(){
        this.props.fetchFollowersRequest(this.props.login);
    }

    render() {
        const {followers, isFetching, error, errorMeta} = this.props.followers;
        const hasFollowers = followers.length > 0;

        const domTree = () => {
            if (isFetching){
                return <div className="loading">Loading data...</div>
            }
    
            if (!isFetching && !hasFollowers){
                return <div className="no-user">No followers found!</div>
            }
    
            if (error){
                return <div className="error">{errorMeta}</div>
            }

            if (hasFollowers){  
                return(hasFollowers && followers.map( (item, index) => <Follower key={index} data={item} /> ));
            }
        }
                  
        return (
            <div className="user-followers">
                {domTree()}
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        followers: getFollowers(state)
    }
  };
  
const mapDispatchToProps = {fetchFollowersRequest};

export default connect( mapStateToProps, mapDispatchToProps )(Followers);