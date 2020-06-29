import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
           <h3>Welcome to GMusicAcademy Manager</h3>

        </Container>
        <Container fluid>
          <Button color="link"><Link to="/customers">Manage GMusicAcademy Customers</Link></Button>
          <Button color="link"><Link to="/employees">Manage GMusicAcademy Employees</Link></Button>
          <Button color="link"><Link to="/sessions">Manage GMusicAcademy Sessions</Link></Button>
          <Button color="link"><Link to="/items">Manage GMusicAcademy Items</Link></Button>
          <Button color="link"><Link to="/transactions">Manage GMusicAcademy Transactions</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Home;
