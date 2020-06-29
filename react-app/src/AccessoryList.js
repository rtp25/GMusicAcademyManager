import React, { Component, useState } from 'react';
import { Button, ButtonGroup, Container, Table} from 'reactstrap';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Bdrop = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
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

class AccessoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          accessorys: [],
          isLoading: true

        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/accessories')
            .then(response => response.json())
            .then(data => this.setState({accessories: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/accessory/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedAccessories = [...this.state.accessories].filter(i => i.item_id !== id);
          this.setState({accessories: updatedAccessories});
        });
    }

    render() {

      const {accessories, isLoading} = this.state;


      if(isLoading) {
        return<p> Loading...</p>;
      }


      const accessoryList = accessories.map(accessory => {
      return <tr key={accessory.item_id}>
        <td style={{whiteSpace: 'nowrap'}}>{accessory.item_id}</td>
        <td>{accessory.name}</td>
        <td>{accessory.brand}</td>
        <td>{accessory.description}</td>
        <td>{accessory.price}</td>
        <td>{accessory.quantity}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/accessory/" + accessory.item_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(accessory.item_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });



    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="accessory/new">Add accessory</Button>
          </div>
          <h3>Accessories</h3>
       <Bdrop/>

          <Table className="mt-4">
            <thead>
            <tr>
              <th width="15%">Accessory ID</th>
              <th width="20%">Name</th>
              <th width="20%">Brand</th>
              <th width="20%">Description</th>
              <th width="20%">Price</th>
              <th width="20%">Quantity</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {accessoryList}
            </tbody>
          </Table>
        </Container>
      </div>
    );


}
}
export default AccessoryList;
