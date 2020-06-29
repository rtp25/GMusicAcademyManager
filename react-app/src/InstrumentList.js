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

class InstrumentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          instruments: [],
          isLoading: true

        };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/instruments')
            .then(response => response.json())
            .then(data => this.setState({instruments: data, isLoading: false}))

    }

    async remove(id) {
        await fetch(`/api/instrument/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        }).then(() => {
          let updatedinstruments = [...this.state.instruments].filter(i => i.instrument_id !== id);
          this.setState({instruments: updatedinstruments});
        });
    }

    render() {

      const {instruments, isLoading} = this.state;


      if(isLoading) {
        return<p> Loading...</p>;
      }


      const instrumentList = instruments.map(instrument => {
      return <tr key={instrument.item_id}>
        <td style={{whiteSpace: 'nowrap'}}>{instrument.item_id}</td>
        <td>{instrument.name}</td>
        <td>{instrument.brand}</td>
        <td>{instrument.model}</td>
        <td>{instrument.price}</td>
        <td>{instrument.quantity}</td>

        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/instrument/" + instrument.item_id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(instrument.item_id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });



    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="instrument/new">Add Instrument</Button>
          </div>
          <h3>Instruments</h3>
       <Bdrop/>

          <Table className="mt-4">
            <thead>
            <tr>
              <th width="15%">Instrument ID</th>
              <th width="20%">Name</th>
              <th width="20%">Brand</th>
              <th width="20%">Model</th>
              <th width="20%">Price</th>
              <th width="20%">Quantity</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {instrumentList}
            </tbody>
          </Table>
        </Container>
      </div>
    );


}
}
export default InstrumentList;
