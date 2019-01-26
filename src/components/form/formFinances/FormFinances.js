import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormFinances extends Component {

    continue = e => {
        e.preventDefault();

        this.props.nextStep();
    }
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values, handleChange} = this.props;
        
        return (
            
                 <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Finances"/>
                    <div style={{textAlign: 'center', marginTop: 50}}>
                        <TextField 
                        hintText="What is your yearly income?"
                        floatingLabelText="Yearly Income"
                        onChange={handleChange('finance')}
                        defaultValue={values.finance}
                        
                        required
                        />
                        <br/>
                        <TextField 
                        hintText="How are your spending habits?"
                        floatingLabelText="Spending Habits"
                     
                        required
                        />
                        <br/>
                        <TextField 
                        hintText="Are you good at saving?"
                        floatingLabelText="Savings"
                       
                        required
                        />
                        <br/>
                        <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        style={styles.button}
                        onClick={this.continue}
                        />
                         <RaisedButton 
                        label = "Back"
                        primary = {false}
                        style={styles.button}
                        onClick={this.back}
                        />
                    </div>
                   
                </React.Fragment>
            </MuiThemeProvider>
        
           
            
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormFinances;