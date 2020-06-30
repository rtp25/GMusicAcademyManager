import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class SalesmanEdit extends Component {

  emptySalesmanEntry = {
    first_name: '',
    last_name: '',
    ssn: '',
    base_salary: '',
    comission_percentage: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      salesmanEntry: this.emptySalesmanEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const salesman = await (await fetch(`/api/salesman/${this.props.match.params.id}`)).json();
      this.setState({salesmanEntry: salesman});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let salesmanEntry = {...this.state.salesmanEntry};
    salesmanEntry[name] = value;
    this.setState({salesmanEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {salesmanEntry} = this.state;

    await fetch('/api/salesman' + (salesmanEntry.employee_id ? '/' + salesmanEntry.employee_id : ''), {
      method: (salesmanEntry.employee_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(salesmanEntry),
    });
    this.props.history.push('/salesmen');
  }

  render() {
    const{salesmanEntry} = this.state;
    const title = <h2>{salesmanEntry.employee_id ? 'Edit Salesman' : 'Add Salesman'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "first_name">First Name</Label>
            <Input type="text" name="first_name" id="first_name" value={salesmanEntry.first_name || ''}
                   onChange={this.handleChange} autoComplete="first_name"/>

            </FormGroup>
      <FormGroup>
        <Label for="last_name">Last Name</Label>
        <Input type="text" name="last_name" id="last_name" value={salesmanEntry.last_name || ''}
               onChange={this.handleChange} autoComplete="last_name"/>
      </FormGroup>
      <FormGroup>
        <Label for="ssn">SSN</Label>
        <Input type="text" name="ssn" id="ssn" value={salesmanEntry.ssn || ''}
               onChange={this.handleChange} autoComplete="ssn"/>
      </FormGroup>
      <FormGroup>
      <Label for="base_salary">Base Salary</Label>
      <Input type="text" name="base_salary" id="base_salary" value={salesmanEntry.base_salary || ''}
              onChange={this.handleChange} autoComplete="base_salary"/>
      </FormGroup>
      <FormGroup>
      <Label for="comission_percentage">Comission Percentage</Label>
      <Input type="text" name="comission_percentage" id="comission_percentage" value={salesmanEntry.comission_percentage || ''}
              onChange={this.handleChange} autoComplete="comission_percentage"/>
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/salesmen">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(SalesmanEdit);
