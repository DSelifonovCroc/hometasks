import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {

    handleChangeForm = event => {
        this.props.onChangeForm(event.target.name, event.target.value);
    }

    render() { 
        return (
            <div className="personal-form">
                <input name="firstName" onChange={this.handleChangeForm} value={this.props.firstName} />
                <input name="lastName"  onChange={this.handleChangeForm} value={this.props.lastName} />
                <input name="email"     onChange={this.handleChangeForm} value={this.props.email} />
            </div>
        );
    }
}

export default PersonalForm;