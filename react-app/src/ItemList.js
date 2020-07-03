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
        Item Types
      </DropdownToggle>
      <DropdownMenu>
			<Dropdown.Item href="/items">All Items</Dropdown.Item>
			<Dropdown.Item href="/instruments">Instruments</Dropdown.Item>
      <Dropdown.Item href="/accessories">Accessories</Dropdown.Item>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoading: true

        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/items')
            .then(response => response.json())
            .then(data => this.setState({items: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/item/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedItems = [...this.state.items].filter(i => i.item_id !== id);
          this.setState({items: updatedItems});
        });
    }

    render() {

      const {items, isLoading} = this.state;


      if(isLoading) {
        return<p> Loading...</p>;
      }


      const itemList = items.map(item => {
      return <tr key={item.item_id}>
        <td style={{whiteSpace: 'nowrap'}}>{item.item_id}</td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/item/" + item.item_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(item.item_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });



    return (
      <div>
        <AppNavbar/>
        <Container fluid>

          <h3>Items</h3>
       <Bdrop/>

          <Table className="mt-4">
            <thead>
            <tr>
              <th width="15%">Item ID</th>
              <th width="20%">Name</th>
              <th width="20%">Brand</th>
              <th width="20%">Price</th>
              <th width="20%">Quantity</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {itemList}
            </tbody>
          </Table>
        </Container>
      </div>
    );


}
}
export default ItemList;
