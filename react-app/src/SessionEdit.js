import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class SessionEdit extends Component {

  emptySessionEntry = {
    instrument_id: '',
    instructor_id: '',
    student_id: '',
    cost: '',
    time: '',
    date: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      sessionEntry: this.emptySessionEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const session = await (await fetch(`/api/session/${this.props.match.params.id}`)).json();
      this.setState({sessionEntry: session});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let sessionEntry = {...this.state.sessionEntry};
    sessionEntry[name] = value;
    this.setState({sessionEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {sessionEntry} = this.state;

    await fetch('/api/session' + (sessionEntry.session_id ? '/' + sessionEntry.session_id : ''), {
      method: (sessionEntry.session_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionEntry),
    });
    this.props.history.push('/sessions');
  }

  render() {
    const{sessionEntry} = this.state;
    const title = <h2>{sessionEntry.session_id ? 'Edit Session' : 'Add Session'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "instrument_id">Instrument ID</Label>
            <Input type="text" name="instrument_id" id="instrument_id" value={sessionEntry.instrument_id || ''}
                   onChange={this.handleChange} autoComplete="instrument_id"/>

            </FormGroup>
      <FormGroup>
        <Label for="instructor_id">Instructor ID</Label>
        <Input type="text" name="instructor_id" id="instructor_id" value={sessionEntry.instructor_id || ''}
               onChange={this.handleChange} autoComplete="instructor_id"/>
      </FormGroup>
      <FormGroup>
        <Label for="student_id">Student ID</Label>
        <Input type="text" name="student_id" id="student_id" value={sessionEntry.student_id || ''}
               onChange={this.handleChange} autoComplete="model"/>
      </FormGroup>
      <FormGroup>
      <Label for="cost">Cost</Label>
      <Input type="text" name="cost" id="cost" value={sessionEntry.cost || ''}
              onChange={this.handleChange} autoComplete="price"/>
      </FormGroup>
      <FormGroup>
      <Label for="time">Time</Label>
      <Input type="text" name="time" id="time" value={sessionEntry.time || ''}
              onChange={this.handleChange} autoComplete="time"/>
      </FormGroup>
      <FormGroup>
      <Label for="date">Date</Label>
      <Input type="text" name="date" id="date" value={sessionEntry.date || ''}
              onChange={this.handleChange} autoComplete="date"/>
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/sessions">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(SessionEdit);
