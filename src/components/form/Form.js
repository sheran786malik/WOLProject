import React, {Component} from 'react';

import FormUserDetails from './formUserDetails/FormUserDetails';
import FormPersonalDetails from './formPersonalDetails/FormPersonalDetails';
import FormHealth from './formHealth/FormHealth';
import FormFinances from './formFinances/FormFinances'
import Results from './results/Results'



import './Form.module.css';

import HorizontalLabelPositionBelowStepper from '../questionnaireContainer/QuestionnaireContainer';

export class Form extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        exercise: '',
        health: '',
        finance: 0,
    }

    //proceed to next step
    nextStep = () => {
        const {step } = this.state;
        this.setState ({
            step: step + 1
        });
    }

     //proceed to next step
     prevStep = () => {
        const {step } = this.state;
        this.setState ({
            step: step - 1
        });
    }

    //Handle field change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value}
            );
    }
    
    render() {

        const {step} = this.state;
        const {firstName, lastName, email, occupation, city,
        bio, exercise} = this.state;

        const values = { firstName, lastName, email, occupation, city,
            bio, exercise}
            
            switch(step) {
                case 1:
                return (
                    <div className="container" style={{backgroundColor: '#f7f7f7', marginLeft: 550, width:  700,height: 500,marginTop: 170}}> 
                       
                    <FormUserDetails

                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    </div>
    
                );

                case 2: 
                return (
                    <div className="container" style={{backgroundColor: '#f7f7f7', marginLeft: 550, width:  700,height: 500,marginTop: 170}}> 
                     
                        <FormPersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                    </div>
                   
                );
                case 3: 
                return (
                    <div className="container" style={{backgroundColor: '#f7f7f7', marginLeft: 550, width:  700,height: 500,marginTop: 170}}> 
                     
                        <FormHealth
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                    </div>
                );
                case 4: 
                return (
                    <div className="container" style={{backgroundColor: '#f7f7f7', marginLeft: 550, width:  700,height: 500,marginTop: 170}}> 
                     
                        <FormFinances
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                    </div>
                   
                );
                case 5: 
                return (
                    <div className="container" style={{overflowX : 'auto',backgroundColor: '#f7f7f7', marginLeft: 550, width:  700,height: 500,marginTop: 170}}> 
                     
                        <Results
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
                    </div>
                    
                );

                case 4: 
                return (
                    <h1> Success </h1>
                    
                );


            }
        
    }
}

export default Form;