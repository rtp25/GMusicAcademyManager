import React, { Component,useState } from 'react';
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
    <ButtonDropdown  isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color = "info">
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


class EmployeeList extends Component{

  constructor(props) {
      super(props);
      this.state = {
        employees: [],
        isLoading: true

    };
    this.remove = this.remove.bind(this);
  }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/employees')
            .then(response => response.json())
            .then(data => this.setState({employees: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/employee/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedEmployees = [...this.state.employees].filter(i => i.employee_id !== id);
          this.setState({employees: updatedEmployees});
        });
    }

    render() {

      const {employees, isLoading} = this.state;

      if(isLoading) {
        return<p> Loading...</p>;
      }

      const employeeList = employees.map(employee => {
      return <tr key={employee.employee_id}>
        <td style={{whiteSpace: 'nowrap'}}>{employee.employee_id}</td>
        <td>{employee.first_name}</td>
        <td>{employee.last_name}</td>
        <td>{employee.ssn}</td>
        <td>{employee.base_salary}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/employee/" + employee.employee_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(employee.employee_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>

          <h3>Employees</h3>
          <Bdrop/>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="15%">Employee ID</th>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th width="20%">SSN</th>
              <th width="20%">Base Salary</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {employeeList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default EmployeeList;
