import React, { Component, useState } from 'react';
import { Button, ButtonGroup, Container, Table} from 'reactstrap';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


const Bdrop = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Customer Types
      </DropdownToggle>
      <DropdownMenu>
			<Dropdown.Item href="/customers">All Customers</Dropdown.Item>
			<Dropdown.Item href="/students">Students</Dropdown.Item>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          students: [],
          isLoading: true

        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/students')
            .then(response => response.json())
            .then(data => this.setState({students: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/student/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedStudents = [...this.state.students].filter(i => i.customer_id !== id);
          this.setState({students: updatedStudents});
        });
    }

    render() {

      const {students, isLoading} = this.state;


      if(isLoading) {
        return<p> Loading...</p>;
      }


      const studentList = students.map(student => {
      return <tr key={student.student_id}>
        <td style={{whiteSpace: 'nowrap'}}>{student.customer_id}</td>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
        <td>{student.phone_number}</td>
        <td>{student.instrument_type_learning}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/student/" + student.customer_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(student.customer_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });



    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="student/new">Add student</Button>
          </div>
          <h3>Students</h3>
       <Bdrop/>

          <Table className="mt-4">
            <thead>
            <tr>
              <th width="15%">student ID</th>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th width="20%">Phone Number</th>
              <th width="20%">Instrument Learning</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {studentList}
            </tbody>
          </Table>
        </Container>
      </div>
    );


}
}
export default StudentList;
