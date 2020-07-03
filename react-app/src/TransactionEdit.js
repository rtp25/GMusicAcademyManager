import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class TransactionEdit extends Component {

  emptyTransactionEntry = {
    item_id: '',
    employee_id: '',
    customer_id: '',
    sale_quantity: '',
    total_cost: '',
    date: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      transactionEntry: this.emptyTransactionEntry
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if(this.props.match.params.id !== 'new') {
      const transaction = await (await fetch(`/api/transaction/${this.props.match.params.id}`)).json();
      this.setState({transactionEntry: transaction});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let transactionEntry = {...this.state.transactionEntry};
    transactionEntry[name] = value;
    this.setState({transactionEntry});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {transactionEntry} = this.state;

    await fetch('/api/transaction' + (transactionEntry.transaction_id ? '/' + transactionEntry.transaction_id : ''), {
      method: (transactionEntry.transaction_id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactionEntry),
    });
    this.props.history.push('/transactions');
  }

  render() {
    const{transactionEntry} = this.state;
    const title = <h2>{transactionEntry.transaction_id ? 'Edit Transaction' : 'Add Transaction'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit = {this.handleSubmit}>
          <FormGroup>
            <Label for = "item_id">Item ID</Label>
            <Input type="text" name="item_id" id="item_id" value={transactionEntry.item_id || ''}
                   onChange={this.handleChange} autoComplete="item_id"/>

            </FormGroup>
      <FormGroup>
        <Label for="employee_id">Employee ID</Label>
        <Input type="text" name="employee_id" id="employee_id" value={transactionEntry.employee_id || ''}
               onChange={this.handleChange} autoComplete="employee_id"/>
      </FormGroup>
      <FormGroup>
        <Label for="customer_id">Customer ID</Label>
        <Input type="text" name="customer_id" id="customer_id" value={transactionEntry.customer_id || ''}
               onChange={this.handleChange} autoComplete="model"/>
      </FormGroup>
      <FormGroup>
      <Label for="sale_quantity">Sale Quantity</Label>
      <Input type="text" name="sale_quantity" id="sale_quantity" value={transactionEntry.sale_quantity || ''}
              onChange={this.handleChange} autoComplete="price"/>
      </FormGroup>
      <FormGroup>
      <Label for="total_cost">Total Cost</Label>
      <Input type="text" name="total_cost" id="total_cost" value={transactionEntry.total_cost || ''}
              onChange={this.handleChange} autoComplete="total_cost"/>
      </FormGroup>
      <FormGroup>
      <Label for="date">Date</Label>
      <Input type="text" name="date" id="date" value={transactionEntry.date || ''}
              onChange={this.handleChange} autoComplete="date"/>
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">Save</Button>{' '}
        <Button color="secondary" tag={Link} to="/transactions">Cancel</Button>
      </FormGroup>
    </Form>
  </Container>
</div>
  }
}
export default withRouter(TransactionEdit);
