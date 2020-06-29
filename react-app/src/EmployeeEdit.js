import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class EmployeeEdit extends Component {

  emptyEmployeeEntry = {
    first_name: '',
    last_name: '',
    ssn: '',
    base_salary: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      employeeEntry: this.emptyEmployeeEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const employee = await (await fetch(`/api/employee/${this.props.match.params.id}`)).json();
      this.setState({employeeEntry: employee});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let employeeEntry = {...this.state.employeeEntry};
    employeeEntry[name] = value;
    this.setState({employeeEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {employeeEntry} = this.state;

    await fetch('/api/employee' + (employeeEntry.employee_id ? '/' + employeeEntry.employee_id : ''), {
      method: (employeeEntry.employee_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employeeEntry),
    });
    this.props.history.push('/employees');
  }

  render() {
    const{employeeEntry} = this.state;
    const title = <h2>{employeeEntry.employee_id ? 'Edit Employee' : 'Add Employee'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "first_name">First Name</Label>
            <Input type="text" name="first_name" id="first_name" value={employeeEntry.first_name || ''}
                   onChange={this.handleChange} autoComplete="first_name"/>

            </FormGroup>
      <FormGroup>
        <Label for="last_name">Last Name</Label>
        <Input type="text" name="last_name" id="last_name" value={employeeEntry.last_name || ''}
               onChange={this.handleChange} autoComplete="last_name"/>
      </FormGroup>
      <FormGroup>
        <Label for="ssn">SSN</Label>
        <Input type="text" name="ssn" id="ssn" value={employeeEntry.ssn || ''}
               onChange={this.handleChange} autoComplete="ssn"/>
      </FormGroup>
      <FormGroup>
      <Label for="base_salary">Base Salary</Label>
      <Input type="text" name="base_salary" id="base_salary" value={employeeEntry.base_salary || ''}
              onChange={this.handleChange} autoComplete="base_salary"/>
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/employees">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(EmployeeEdit);
