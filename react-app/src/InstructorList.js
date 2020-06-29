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

class InstructorList extends Component{

  constructor(props) {
      super(props);
      this.state = {
        instructors: [],
        isLoading: true

    };
    this.remove = this.remove.bind(this);
  }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/instructors')
            .then(response => response.json())
            .then(data => this.setState({instructors: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/instructor/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedInstructors = [...this.state.instructors].filter(i => i.instructor_id !== id);
          this.setState({instructors: updatedInstructors});
        });
    }

    render() {

      const {instructors, isLoading} = this.state;

      if(isLoading) {
        return<p> Loading...</p>;
      }

      const instructorList = instructors.map(instructor => {
      return <tr key={instructor.employee_id}>
      <td style={{whiteSpace: 'nowrap'}}>{instructor.employee_id}</td>
        <td>{instructor.first_name}</td>
        <td>{instructor.last_name}</td>
        <td>{instructor.ssn}</td>
        <td>{instructor.base_salary}</td>
        <td>{instructor.instrument_taught_type}</td>

        <td>
          <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/instructor/" + instructor.instructor_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(instructor.instructor_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="instructor/new">Add Instructor</Button>
          </div>
          <h3>Instructors</h3>
          <Bdrop/>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="15%">Instructor ID</th>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th width="20%">SSN</th>
              <th width="20%">Base Salary</th>
              <th width="20%">Instrument Taught Type</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {instructorList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default InstructorList;
