import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class StudentEdit extends Component {

  emptyStudentEntry = {
    first_name: '',
    last_name: '',
    phone_number: '',
    instrument_type_learning: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      studentEntry: this.emptyStudentEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const student = await (await fetch(`/api/student/${this.props.match.params.id}`)).json();
      this.setState({studentEntry: student});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let studentEntry = {...this.state.studentEntry};
    studentEntry[name] = value;
    this.setState({studentEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {studentEntry} = this.state;

    await fetch('/api/student' + (studentEntry.customer_id ? '/' + studentEntry.customer_id : ''), {
      method: (studentEntry.customer_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentEntry),
    });
    this.props.history.push('/students');
  }

  render() {
    const{studentEntry} = this.state;
    const title = <h2>{studentEntry.customer_id ? 'Edit Student' : 'Add Student'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "first_name">First Name</Label>
            <Input type="text" name="first_name" id="first_name" value={studentEntry.first_name || ''}
                   onChange={this.handleChange} autoComplete="first_name"/>

            </FormGroup>
      <FormGroup>
        <Label for="last_name">Last Name</Label>
        <Input type="text" name="last_name" id="last_name" value={studentEntry.last_name || ''}
               onChange={this.handleChange} autoComplete="last_name"/>
      </FormGroup>
      <FormGroup>
        <Label for="phone_number">Phone Number</Label>
        <Input type="text" name="phone_number" id="phone_number" value={studentEntry.phone_number || ''}
               onChange={this.handleChange} autoComplete="phone_number"/>
      </FormGroup>
      <FormGroup>
        <Label for="instrument_type_learning">Instrument Type Learning</Label>
        <Input type="text" name="instrument_type_learning" id="phone_number" value={studentEntry.instrument_type_learning || ''}
               onChange={this.handleChange} autoComplete="instrument_type_learning"/>
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/students">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(StudentEdit);
