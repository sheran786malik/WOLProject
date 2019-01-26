import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from '../components/layout/landing/Landing'
import Intro from './intro/Intro'
import Form from '../components/form/Form';

class App extends Component {
  render() {
    return (
  
        <BrowserRouter>
        <div>
              <Route path="/landing" component={Landing}/>
              <Route path="/intro" component={Intro}/>
              <Route path="/wayoflife" component={Form} />
            
        </div>
          
        </BrowserRouter>
  
        
  
    );
  }
}

export default App