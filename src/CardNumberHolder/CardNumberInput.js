import React, {Component} from 'react';

class CardNumberInput extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            cardNumber: this.normalize(props.cardNumber),
            number: this.format(props.cardNumber)
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            cardNumber: this.normalize(nextProps.cardNumber),
            number: this.format(nextProps.cardNumber)
        })
    }

    normalize = (value) => {
        return value ? String(value).replace(/\s/g, "") : '';
    }

    format = (val) => {
        let value = this.normalize(val);
        let parts = [];

        for (let i = 0; i < value.length; i += 4){
            parts.push(value.substring(i, i + 4));
        }

        return parts.join(" ");
    }

    handleChange = (event) => {
        let value = this.normalize(event.target.value);

        this.props.onChange(value);
        this.setState({
            cardNumber: value,
            number: this.format(value)
        });
    }

    render() {
        return (
            <input value={this.state.number} onChange={this.handleChange} />
        );
    }
}

export default CardNumberInput;
