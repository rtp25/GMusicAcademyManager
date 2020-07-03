import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class AccessoryEdit extends Component {

  emptyAccessoryEntry = {
    name: '',
    brand: '',
    description: '',
    price: '',
    quantity: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      accessoryEntry: this.emptyAccessoryEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const accessory = await (await fetch(`/api/accessory/${this.props.match.params.id}`)).json();
      this.setState({accessoryEntry: accessory});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let accessoryEntry = {...this.state.accessoryEntry};
    accessoryEntry[name] = value;
    this.setState({accessoryEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {accessoryEntry} = this.state;

    await fetch('/api/accessory' + (accessoryEntry.item_id ? '/' + accessoryEntry.item_id : ''), {
      method: (accessoryEntry.item_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(accessoryEntry),
    });
    this.props.history.push('/accessories');
  }

  render() {
    const{accessoryEntry} = this.state;
    const title = <h2>{accessoryEntry.item_id ? 'Edit Accessory' : 'Add Accessory'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "name">Name</Label>
            <Input type="text" name="name" id="name" value={accessoryEntry.name || ''}
                   onChange={this.handleChange} autoComplete="first_name"/>

            </FormGroup>
      <FormGroup>
        <Label for="brand">Brand</Label>
        <Input type="text" name="brand" id="brand" value={accessoryEntry.brand || ''}
               onChange={this.handleChange} autoComplete="brand"/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" value={accessoryEntry.description || ''}
               onChange={this.handleChange} autoComplete="description"/>
      </FormGroup>
      <FormGroup>
      <Label for="price">Price</Label>
      <Input type="text" name="price" id="price" value={accessoryEntry.price || ''}
              onChange={this.handleChange} autoComplete="price"/>
      </FormGroup>
      <FormGroup>
      <Label for="quantity">Quantity</Label>
      <Input type="text" name="quantity" id="quantity" value={accessoryEntry.quantity || ''}
              onChange={this.handleChange} autoComplete="quantity"/>
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/accessorys">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(AccessoryEdit);
