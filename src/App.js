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
        this.setState({step: step});
    }

    handleChangeForm = (key, value) => {
        this.setState({[key]: value});
    }

    isFormCommitable = () => {
        const state = this.state;

        if ( state.step === 1 && (
            state.firstName === '' || 
            state.lastName === '' ||
            state.email === '' || 
            !state.email.includes('@')
            )
        ){
            return false;
        } else if (state.step === 2 && state.cardNumber.length !== 16 ) {
            return false;
        } else if (state.step !== 1 && state.step !== 2) {
            return false;
        }

        return true;
    }

    renderForm = () => {
        const state = this.state
        switch(state.step){
            case 1:
                return (<PersonalForm 
                            firstName={state.firstName} 
                            lastName={state.lastName} 
                            email={state.email} 
                            onChangeForm={this.handleChangeForm} />);
            case 2:
                return (<CardForm 
                            cardNumber={state.cardNumber} 
                            onChangeForm={this.handleChangeForm} 
                            onChangeTimeOver={this.handleChangeTimeOver} />);
            case 3:
                return ('Поздравляем!');
        }
    }
  
    render() { 
        const step = this.state.step;
        return (
            <div className="App">
                <div className="container">
                    <div className="tab-panel">
                        <Step 
                            number={1} 
                            onClick={this.handleTabClick} 
                            isSelected={step === 1 ? true : false} 
                            isClickable={step > 1 ? true : false} 
                        >Personal information</Step>
                        
                        <Step 
                            number={2} 
                            onClick={this.handleTabClick} 
                            isSelected={step === 2 ? true : false} 
                            isClickable={step > 2 ? true : false} 
                        >Card information</Step>

                        <Step 
                            number={3} 
                            onClick={this.handleTabClick} 
                            isSelected={step === 3 ? true : false} 
                            isClickable={step > 3 ? true : false} 
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
                        disabled={this.isFormCommitable() ? '' : 'disabled'}
                    >Next</button>
                </div>
            </div>
        );
    }
  }
  
  export default App;