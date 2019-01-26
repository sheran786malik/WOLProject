import React, {Component} from 'react';

import FormUserDetails from './formUserDetails/FormUserDetails';
import FormPersonalDetails from './formPersonalDetails/FormPersonalDetails';
import Results from './results/Results'
import './Form.module.css';

import HorizontalLabelPositionBelowStepper from '../questionnaireContainer/QuestionnaireContainer';

export class Form extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        emai: '',
        occupation: '',
        city: '',
        bio: '',
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
        bio} = this.state;

        const values = { firstName, lastName, email, occupation, city,
            bio}
            
            switch(step) {
                case 1:
                return (
                    <div className="container" style={{backgroundColor: '#f7f7f7'}}> 
                       
                    <FormUserDetails

                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    </div>
    
                );

                case 2: 
                return (
                    <div className="container" style={{backgroundColor: '#f7f7f7'}}> 
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
                    <div className="container" style={{backgroundColor: '#f7f7f7'}}> 

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