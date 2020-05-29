import React from 'react';

import Logo         from '../../../images/logo192.png'

import {Button }    from 'react-bootstrap'
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'
import                                'bootstrap/dist/css/bootstrap.min.css';
import './MainHeader.css';

const MainHeader = props => {
  return (
      <>
      <Navbar bg="dark" expand="lg" sticky="top" className="mb-3">

        <Navbar.Brand href="/">
        <img width="30" height="30" className="d-inline-block align-top mr-2" alt="logo" src = {Logo}/>
          <span>Share A Place</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/places/new">new places</Nav.Link>
            <Nav.Link href="/All-places">All places</Nav.Link>
            <Nav.Link href="/All-Users">All Users</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
