import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerEdit from './CustomerEdit';

// add routes to other Components
// add js components for other objects
// add Delete, edit and create functionality to Components
// make a better home screen
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/customers' exact={true} component={CustomerList}/>
          <Route path='/customer/:id' component={CustomerEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
