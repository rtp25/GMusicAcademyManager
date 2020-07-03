import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class InstructorEdit extends Component {

  emptyInstructorEntry = {
    first_name: '',
    last_name: '',
    ssn: '',
    base_salary: '',
    instrument_taught_type: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      instructorEntry: this.emptyInstructorEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const instructor = await (await fetch(`/api/instructor/${this.props.match.params.id}`)).json();
      this.setState({instructorEntry: instructor});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let instructorEntry = {...this.state.instructorEntry};
    instructorEntry[name] = value;
    this.setState({instructorEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {instructorEntry} = this.state;

    await fetch('/api/instructor' + (instructorEntry.employee_id ? '/' + instructorEntry.employee_id : ''), {
      method: (instructorEntry.employee_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(instructorEntry),
    });
    this.props.history.push('/instructors');
  }

  render() {
    const{instructorEntry} = this.state;
    const title = <h2>{instructorEntry.em_id ? 'Edit Instructor' : 'Add Instructor'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "first_name">First Name</Label>
            <Input type="text" name="first_name" id="first_name" value={instructorEntry.first_name || ''}
                   onChange={this.handleChange} autoComplete="first_name"/>

            </FormGroup>
      <FormGroup>
        <Label for="last_name">Last Name</Label>
        <Input type="text" name="last_name" id="last_name" value={instructorEntry.last_name || ''}
               onChange={this.handleChange} autoComplete="last_name"/>
      </FormGroup>
      <FormGroup>
        <Label for="ssn">SSN</Label>
        <Input type="text" name="ssn" id="ssn" value={instructorEntry.ssn || ''}
               onChange={this.handleChange} autoComplete="ssn"/>
      </FormGroup>
      <FormGroup>
      <Label for="base_salary">Base Salary</Label>
      <Input type="text" name="base_salary" id="base_salary" value={instructorEntry.base_salary || ''}
              onChange={this.handleChange} autoComplete="base_salary"/>
      </FormGroup>
      <FormGroup>
      <Label for="instrument_taught_type">Instrument Taught Type</Label>
      <Input type="text" name="instrument_taught_type" id="instrument_taught_type" value={instructorEntry.instrument_taught_type || ''}
              onChange={this.handleChange} autoComplete="instrument_taught_type"/>
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/instructors">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(InstructorEdit);
