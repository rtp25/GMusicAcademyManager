import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class CustomerEdit extends Component {

  emptyCustomerEntry = {
    first_name: '',
    last_name: '',
    phone_number: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      customerEntry: this.emptyCustomerEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const customer = await (await fetch(`/api/customer/${this.props.match.params.id}`)).json();
      this.setState({customerEntry: customer});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let customerEntry = {...this.state.customerEntry};
    customerEntry[name] = value;
    this.setState({customerEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {customerEntry} = this.state;

    await fetch('/api/customer' + (customerEntry.customer_id ? '/' + customerEntry.customer_id : ''), {
      method: (customerEntry.customer_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerEntry),
    });
    this.props.history.push('/customers');
  }

  render() {
    const{customerEntry} = this.state;
    const title = <h2>{customerEntry.customer_id ? 'Edit Customer' : 'Add Customer'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "first_name">First Name</Label>
            <Input type="text" name="first_name" id="first_name" value={customerEntry.first_name || ''}
                   onChange={this.handleChange} autoComplete="first_name"/>

            </FormGroup>
      <FormGroup>
        <Label for="last_name">Last Name</Label>
        <Input type="text" name="last_name" id="last_name" value={customerEntry.last_name || ''}
               onChange={this.handleChange} autoComplete="last_name"/>
      </FormGroup>
      <FormGroup>
        <Label for="phone_number">Phone Number</Label>
        <Input type="text" name="phone_number" id="phone_number" value={customerEntry.phone_number || ''}
               onChange={this.handleChange} autoComplete="phone_number"/>
      </FormGroup>

      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/customers">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(CustomerEdit);
