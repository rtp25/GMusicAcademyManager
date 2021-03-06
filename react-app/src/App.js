import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './CustomerList';
import StudentList from './StudentList';
import StudentEdit from './StudentEdit';
import EmployeeList from './EmployeeList';
import CustomerEdit from './CustomerEdit';
import EmployeeEdit from './EmployeeEdit';
import SalesmanEdit from './SalesmanEdit';
import SessionList from './SessionList';
import SessionEdit from './SessionEdit';
import TransactionList from './TransactionList';
import TransactionEdit from './TransactionEdit';
import SalesmanList from './SalesmanList';
import InstructorList from './InstructorList';
import InstructorEdit from './InstructorEdit';
import ItemList from './ItemList';
import InstrumentList from './InstrumentList';
import InstrumentEdit from './InstrumentEdit';
import AccessoryList from './AccessoryList';
import AccessoryEdit from './AccessoryEdit';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/customers' exact={true} component={CustomerList}/>
          <Route path='/students' exact={true} component={StudentList}/>
          <Route path='/customer/:id' component={CustomerEdit}/>
          <Route path='/student/:id'  component={StudentEdit}/>
          <Route path='/employees' exact={true} component={EmployeeList}/>
          <Route path='/instructors' exact={true} component={InstructorList}/>
          <Route path='/instructor/:id' component={InstructorEdit}/>
          <Route path='/salesmen' exact={true} component={SalesmanList}/>
          <Route path='/salesman/:id'  component={SalesmanEdit}/>
          <Route path='/employee/:id' component={EmployeeEdit}/>
          <Route path='/sessions' exact={true} component={SessionList}/>
          <Route path='/session/:id' component={SessionEdit}/>
          <Route path='/transactions' exact={true} component={TransactionList}/>
          <Route path='/transaction/:id' component={TransactionEdit}/>
          <Route path='/items' exact={true} component={ItemList}/>
          <Route path='/instruments' exact={true} component={InstrumentList}/>
          <Route path='/instrument/:id' component={InstrumentEdit}/>
          <Route path='/accessories' exact={true} component={AccessoryList}/>
          <Route path='/accessory/:id' component={AccessoryEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
