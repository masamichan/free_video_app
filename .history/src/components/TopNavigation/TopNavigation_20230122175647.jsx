import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

export class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
    };
  }

  onScroll = () => {
    if (window.scroll > 100) {
      this.setState({ navBarTitle: "navTileScroll" });
    } else if (window.scroll < 100) {
      this.setState({ navbarTitle: "navTitle" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

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
            <Navbar.Brand className={this.state.navBarTitle} href="#home">
              EASY LEARNING
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
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
