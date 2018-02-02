import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
    handleChangeForm = event => {
        const {name, value} = event.target;
        this.props.onChangeForm(name, value);
    }

    componentWillUnmount() {

    }

    render() { 
        return (
            <div className="card-form">
                <input 
                    name="cardNumber" 
                    onChange={this.handleChangeForm} 
                    value={this.props.cardNumber} />
            </div>
        );
    }
}

export default CardForm;