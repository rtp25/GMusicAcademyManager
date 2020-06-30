import React, { Component, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Bdrop = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Employee Types
      </DropdownToggle>
      <DropdownMenu>
			<Dropdown.Item href="/employees">All Employees</Dropdown.Item>
			<Dropdown.Item href="/instructors">Instructors</Dropdown.Item>
			<Dropdown.Item href="/salesmen">Salesmen</Dropdown.Item>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

class SalesmanList extends Component{

  constructor(props) {
      super(props);
      this.state = {
        salesmen: [],
        isLoading: true

    };
    this.remove = this.remove.bind(this);
  }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/salesmen')
            .then(response => response.json())
            .then(data => this.setState({salesmen: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/salesman/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedSalesmen = [...this.state.salesmen].filter(i => i.employee_id !== id);
          this.setState({salesmen: updatedSalesmen});
        });
    }

    render() {

      const {salesmen, isLoading} = this.state;

      if(isLoading) {
        return<p> Loading...</p>;
      }

      const salesmanList = salesmen.map(salesman => {
      return <tr key={salesman.employee_id}>
        <td style={{whiteSpace: 'nowrap'}}>{salesman.employee_id}</td>
        <td>{salesman.first_name}</td>
        <td>{salesman.last_name}</td>
        <td>{salesman.ssn}</td>
        <td>{salesman.base_salary}</td>
        <td>{salesman.comission_percentage}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/salesman/" + salesman.employee_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(salesman.employee_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="salesman/new">Add Salesman</Button>
          </div>
          <h3>Salesmen</h3>
          <Bdrop/>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="15%">Salesman ID</th>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th width="20%">SSN</th>
              <th width="20%">Base Salary</th>
              <th width="20%">Comission Percentage</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {salesmanList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default SalesmanList;
