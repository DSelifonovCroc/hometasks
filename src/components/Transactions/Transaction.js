import React, {Component} from 'react';


class Transaction extends Component {

    render() {
        const {created_at, usd_delta} = this.props.data;
        const currency_delta = this.props.data[`${this.props.currency}_delta`];
        const createdAt = new Date(created_at).toLocaleString()

        return (
          <tr>
            <td>{currency_delta > 0 ? 'Покупка' : 'Продажа'}</td>
            <td>{createdAt}</td>
            <td>{parseFloat(currency_delta)}</td>
            <td>{parseFloat(usd_delta)}</td>
          </tr>
        );
    }
}

export default Transaction;