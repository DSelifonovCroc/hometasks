import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUserRequest} from '../actions/users';
import {getUsers} from '../reducers/users';

import Followers from './Followers';


export class UserPage extends Component {

    componentDidMount(){
        this.props.fetchUserRequest(this.props.match.params.name);
    }

    componentWillReceiveProps(nextProps){
        const currentName = this.props.match.params.name;
        const newName = nextProps.match.params.name;

        if (currentName !== newName){
            this.props.fetchUserRequest(newName);
        }
    }

    render() {
        const {isFetching, user, error} = this.props.user;

        const domTree = () => {
            if (isFetching){
                return <div className="loading">Loading data...</div>
            }
    
            if (!isFetching && user == null){
                return <div className="no-user">No such user found!</div>
            }
    
            if (error){
                return <div className="error">Error!</div>
            }

            if (user){
                const {login, followers, public_repos, avatar_url} = user.data;

                return (
                    <div className="user">
                        <div className="user-data">
                            <div className="user-data-logo">
                                <img src={avatar_url} alt={login}/>
                            </div>
                            <div className="user-data-description">
                                <h3>{login}</h3>
                                <p>Followers number: {followers}</p>
                                <p>Public repos number: {public_repos}</p>
                            </div>
                        </div>

                        <Followers login={login} />
                    </div>
                );
            }
        }

        return (
            <div className="user-page">
                {domTree()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: getUsers(state)
    }
  };
  
const mapDispatchToProps = {fetchUserRequest};

export default connect( mapStateToProps, mapDispatchToProps )(UserPage);