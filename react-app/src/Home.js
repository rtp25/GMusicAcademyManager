import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container, ButtonGroup } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 750,
    margin: 'auto',

  },
  butt: {
    padding: theme.spacing(5),
    textAlign: 'center',
  },
  header: {
    margin: 'auto',
    width: 590,
    padding: 30,

  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
      <div className = {classes.header}>
      <h3>Welcome to GMusic Academy Manager</h3>
      </div>
           <div className={classes.root}>
           <Grid container spacing={1}>
             <Grid container item xs={12} spacing={3}>
             <Grid item xs={6}>
             <ButtonGroup className="btn-toolbar">
           <Button  className = {classes.butt} size = "lg" color ="success" onClick={() =>props.history.push('/customers')}>Customers</Button>
           </ButtonGroup>
             </Grid>
             <Grid item xs={6}>
             <ButtonGroup className="btn-toolbar">
           <Button className = {classes.butt} size = "lg" color ="info" onClick={() =>props.history.push('/employees')}>Employees</Button>
           </ButtonGroup>
             </Grid>
             <Grid item xs={6}>
             <ButtonGroup className="btn-toolbar">
           <Button className = {classes.butt} size = "lg" color ="danger" onClick={() =>props.history.push('/sessions')}>Sessions</Button>
           </ButtonGroup>
             </Grid>
             <Grid item xs={6}>
             <ButtonGroup className="btn-toolbar">
           <Button className = {classes.butt} size = "lg" color ="warning" onClick={() =>props.history.push('/transactions')}>Transactions</Button>
           </ButtonGroup>
             </Grid>
             <Grid item xs={12}>
             <ButtonGroup className="btn-toolbar">
           <Button className = {classes.butt} size = "lg" color ="primary" onClick={() =>props.history.push('/items')}>Items</Button>
           </ButtonGroup>
             </Grid>
             </Grid>
           </Grid>
           </div>
      </Container>
    </div>
  );
}


export default Home;
