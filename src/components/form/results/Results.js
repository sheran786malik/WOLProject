import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Results extends Component {

    continue = e => {
        e.preventDefault();
        //Process Form //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();

        this.props.prevStep();
    }
    render() {
    const { values: {firstName, lastName, email, occupation,
        city, bio, exercise, finance} } = this.props;
    
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Results"/>
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                        />
                        <ListItem
                        primaryText="Email"
                        secondaryText={email}
                        />
                        <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText={city}
                        />
                        <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                        />
                        <ListItem
                        primaryText="Exercise"
                        secondaryText={exercise}
                        />
                        <ListItem
                        primaryText="Finances"
                        secondaryText={finance}
                        />
                        <RaisedButton 
                        label = "Confirm and Continue"
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

                    </List>
                    
                        
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
export default Results;