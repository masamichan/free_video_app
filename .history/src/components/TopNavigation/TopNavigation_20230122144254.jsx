import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

export class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="collasible-nav-dropdown"
                ></NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">HOME</Nav.Link>
                <Nav.Link href="#deets">ABOUT</Nav.Link>
                <Nav.Link href="#deets">SERVICE</Nav.Link>
                <Nav.Link href="#deets">COURSES</Nav.Link>
                <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                <Nav.Link href="#deets">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
