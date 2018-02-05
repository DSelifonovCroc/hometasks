import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
    state = {
        cardNumber: ''
    }

    handleChange = (cardNumber) => {
        this.setState({cardNumber});
    }

    render() {
        return (
            <div className="card-holder">
                <CardNumberInput cardNumber={this.state.cardNumber} onChange={this.handleChange} />
            </ div>
        );
    }
}

CardNumberHolder.displayName = "Card number formating";

export default CardNumberHolder;
