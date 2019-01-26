import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormHealth extends Component {

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
                    <AppBar title="Health"/>
                    <div style={{textAlign: 'center', marginTop: 50}}>
                        <TextField 
                        hintText="Yes or No"
                        floatingLabelText="Do you exercise?"
                        onChange={handleChange('exercise')}
                        defaultValue={values.exercise}
                        
                        required
                        />
                        <br/>
                        <TextField 
                        hintText="Daily... Weekly... Monthly"
                        floatingLabelText="How often do you exercise?"
                     
                        required
                        />
                        <br/>
                        <TextField 
                        hintText="Type mental health problems"
                        floatingLabelText="Mental Health?"
                       
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
export default FormHealth;