import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class SessionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          sessions: [],
          isLoading: true

        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/sessions')
            .then(response => response.json())
            .then(data => this.setState({sessions: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/session/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedsessions = [...this.state.sessions].filter(i => i.session_id !== id);
          this.setState({sessions: updatedsessions});
        });
    }

    render() {

      const {sessions, isLoading} = this.state;

      if(isLoading) {
        return<p> Loading...</p>;
      }

      const sessionList = sessions.map(session => {
      return <tr key={session.session_id}>
        <td style={{whiteSpace: 'nowrap'}}>{session.session_id}</td>
        <td>{session.instructor_id}</td>
        <td>{session.instructor_id}</td>
        <td>{session.student_id}</td>
        <td>{session.cost}</td>
        <td>{session.time}</td>
        <td>{session.date}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/session/" + session.session_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(session.session_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="session/new">Add Session</Button>
          </div>
          <h3>Sessions</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="10%">Session ID </th>
              <th width="10%">Instrument ID </th>
              <th width="10%">Instructor ID</th>
              <th width="10%">Student ID</th>
              <th width="10%">Cost</th>
              <th width="10%">Time</th>
              <th width="10%">Date</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {sessionList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default SessionList;
