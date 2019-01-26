import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();

        this.props.nextStep();
    }
    render() {
    const {values, handleChange} = this.props;
        
        return (
            
                 <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <div style={{textAlign: 'center'}}>
                        <TextField 
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        required
                        />
                        <br/>
                        <TextField 
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        required
                        />
                        <br/>
                        <TextField 
                        hintText="Enter your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        required
                        />
                        <br/>
                        <RaisedButton 
                        label = "Continue"
                        primary = {true}
                        style={styles.button}
                        onClick={this.continue}
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
export default FormUserDetails;