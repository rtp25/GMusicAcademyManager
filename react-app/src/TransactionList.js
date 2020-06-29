import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class TransactionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          transactions: [],
          isLoading: true

        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/transactions')
            .then(response => response.json())
            .then(data => this.setState({transactions: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/transaction/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedTransactions = [...this.state.transactions].filter(i => i.transaction_id !== id);
          this.setState({transactions: updatedTransactions});
        });
    }

    render() {

      const {transactions, isLoading} = this.state;

      if(isLoading) {
        return<p> Loading...</p>;
      }

      const transactionList = transactions.map(transaction => {
      return <tr key={transaction.transaction_id}>
        <td style={{whiteSpace: 'nowrap'}}>{transaction.transaction_id}</td>
        <td>{transaction.item_id}</td>
        <td>{transaction.employee_id}</td>
        <td>{transaction.customer_id}</td>
        <td>{transaction.sale_quantity}</td>
        <td>{transaction.total_cost}</td>
        <td>{transaction.date}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/transaction/" + transaction.transaction_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(transaction.transaction_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="transaction/new">Add Transaction</Button>
          </div>
          <h3>GMusicAcademy Management System</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="10%">Transaction ID </th>
              <th width="10%">Item ID </th>
              <th width="10%">Employee ID</th>
              <th width="10%">Customer ID</th>
              <th width="10%">Sale Quantity</th>
              <th width="10%">Total Cost</th>
              <th width="10%">Date</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {transactionList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default TransactionList;
