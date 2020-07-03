import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class InstrumentEdit extends Component {

  emptyInstrumentEntry = {
    name: '',
    brand: '',
    model: '',
    price: '',
    quantity: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      instrumentEntry: this.emptyInstrumentEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const instrument = await (await fetch(`/api/instrument/${this.props.match.params.id}`)).json();
      this.setState({instrumentEntry: instrument});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let instrumentEntry = {...this.state.instrumentEntry};
    instrumentEntry[name] = value;
    this.setState({instrumentEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {instrumentEntry} = this.state;

    await fetch('/api/instrument' + (instrumentEntry.item_id ? '/' + instrumentEntry.item_id : ''), {
      method: (instrumentEntry.item_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(instrumentEntry),
    });
    this.props.history.push('/instruments');
  }

  render() {
    const{instrumentEntry} = this.state;
    const title = <h2>{instrumentEntry.item_id ? 'Edit Instrument' : 'Add Instrument'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "name">Name</Label>
            <Input type="text" name="name" id="name" value={instrumentEntry.name || ''}
                   onChange={this.handleChange} autoComplete="first_name"/>

            </FormGroup>
      <FormGroup>
        <Label for="brand">Brand</Label>
        <Input type="text" name="brand" id="brand" value={instrumentEntry.brand || ''}
               onChange={this.handleChange} autoComplete="brand"/>
      </FormGroup>
      <FormGroup>
        <Label for="model">Model</Label>
        <Input type="text" name="model" id="model" value={instrumentEntry.model || ''}
               onChange={this.handleChange} autoComplete="model"/>
      </FormGroup>
      <FormGroup>
      <Label for="price">Price</Label>
      <Input type="text" name="price" id="price" value={instrumentEntry.price || ''}
              onChange={this.handleChange} autoComplete="price"/>
      </FormGroup>
      <FormGroup>
      <Label for="quantity">Quantity</Label>
      <Input type="text" name="quantity" id="quantity" value={instrumentEntry.quantity || ''}
              onChange={this.handleChange} autoComplete="quantity"/>
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/instruments">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(InstrumentEdit);
