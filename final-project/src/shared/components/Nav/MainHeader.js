import React from 'react';
import { Link }                  from 'react-router-dom'


import Logo         from '../../../images/logo192.png'

import {Button }    from 'react-bootstrap'
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'
import                                'bootstrap/dist/css/bootstrap.min.css';
import './MainHeader.css';

const MainHeader = props => {
  return (
      <>
      <Navbar bg="dark" expand="lg" sticky="top" className="mb-3 ">

        <Navbar.Brand exact  href="/">
        <img width="30" height="30" className="d-inline-block align-top mr-2" alt="logo" src = {Logo}/>
          <span className="text-light">Share A Place</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link className="text-light" href="/places/new">Add places</Nav.Link>
            <Nav.Link className="text-light" href={`/u1/places`}>My places</Nav.Link>
            <Nav.Link className="text-light" href="/All-places">All places</Nav.Link>
            <Nav.Link className="text-light" href="/All-Users">All Users</Nav.Link>
            <NavDropdown className="text-light" title="More" id="basic-nav-dropdown" >
              <NavDropdown.Item className="bg-dark text-light" href="/auth">Authenticate</NavDropdown.Item>
              <NavDropdown.Item className="bg-dark text-light" href="#action/3.2">About us</NavDropdown.Item>
              <NavDropdown.Item className="bg-dark text-light" href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="bg-dark text-light" href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Navbar>
      </>

  );
};

export default MainHeader;
