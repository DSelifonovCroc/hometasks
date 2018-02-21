import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Follower extends Component {

    render() {
        const {login, avatar_url} = this.props.data;

        return (
            <div className="follower">
                <div className="follower-logo">
                    <img src={avatar_url} alt={login}/>
                </div>
                <div className="follower-description">
                    <Link to={`/user/${login}`}>
                        <h3>{login}</h3>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Follower;
