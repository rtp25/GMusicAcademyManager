import React, { Component, useState } from 'react';
import { Button, ButtonGroup, Container, Table} from 'reactstrap';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


const Bdrop = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color = "info">
        Customer Types
      </DropdownToggle>
      <DropdownMenu>
			<Dropdown.Item href="/customers">All Customers</Dropdown.Item>
			<Dropdown.Item href="/students">Students</Dropdown.Item>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          customers: [],
          isLoading: true

        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/customers')
            .then(response => response.json())
            .then(data => this.setState({customers: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/customer/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedCustomers = [...this.state.customers].filter(i => i.customer_id !== id);
          this.setState({customers: updatedCustomers});
        });
    }

    render() {

      const {customers, isLoading} = this.state;


      if(isLoading) {
        return<p> Loading...</p>;
      }


      const customerList = customers.map(customer => {
      return <tr key={customer.customer_id}>
        <td style={{whiteSpace: 'nowrap'}}>{customer.customer_id}</td>
        <td>{customer.first_name}</td>
        <td>{customer.last_name}</td>
        <td>{customer.phone_number}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/customer/" + customer.customer_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(customer.customer_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });



    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="customer/new">Add Customer</Button>
          </div>
          <h3>Customers</h3>
       <Bdrop/>

          <Table className="mt-4">
            <thead>
            <tr>
              <th width="15%">Customer ID</th>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th width="20%">Phone Number</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {customerList}
            </tbody>
          </Table>
        </Container>
      </div>
    );


}
}
export default CustomerList;
