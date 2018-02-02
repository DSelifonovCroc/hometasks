import React, { Component } from 'react';
import './App.css';
import CardForm from './CardForm';
import PersonalForm from './PersonalForm';
import Step from './Step';

class App extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    }
  
    handleClickNextForm = event => {
      this.setState({step: this.state.step + 1});
    };

    handleTabClick = step => {
        this.setState({step});
    }

    handleChangeForm = (key, value) => {
        this.setState({[key]: value});
    }

    isFormCommitable = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state;

        if (step === 1 && (
            firstName === '' || 
            lastName === '' ||
            email === '' || 
            !email.includes('@')
            )
        ){
            return false;
        } else if (step === 2 && cardNumber.length !== 16 ) {
            return false;
        } else if (step !== 1 && step !== 2) {
            return false;
        }

        return true;
    }

    renderForm = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state;

        if (step === 1){
            return (<PersonalForm 
                firstName={firstName} 
                lastName={lastName} 
                email={email} 
                onChangeForm={this.handleChangeForm} />);
        } else if (step === 2){
            return (<CardForm 
                cardNumber={cardNumber} 
                onChangeForm={this.handleChangeForm} 
                onChangeTimeOver={this.handleChangeTimeOver} />);
        } else if (step === 3){
            return ('Поздравляем!');
        }
    }
  
    render() { 
        const step = this.state.step;
        const disabled = this.isFormCommitable() ? '' : 'disabled'
        return (
            <div className="App">
                <div className="container">
                    <div className="tab-panel">
                        <Step 
                            number={1} 
                            onClick={this.handleTabClick} 
                            isSelected={step === 1} 
                            isClickable={step > 1} 
                        >Personal information</Step>
                        
                        <Step 
                            number={2} 
                            onClick={this.handleTabClick} 
                            isSelected={step === 2} 
                            isClickable={step > 2} 
                        >Card information</Step>

                        <Step 
                            number={3} 
                            onClick={this.handleTabClick} 
                            isSelected={step === 3} 
                            isClickable={step > 3} 
                        >Finish</Step>
                    </div>
                </div>

                <div className="form-content">
                    {this.renderForm()}
                </div>

                <div className="button-panel">
                    <button 
                        onClick={this.handleClickNextForm} 
                        className="button-next" 
                        disabled={disabled}
                    >Next</button>
                </div>
            </div>
        );
    }
  }
  
  export default App;