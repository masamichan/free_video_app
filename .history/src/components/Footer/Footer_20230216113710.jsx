import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg="3" md={6} sm={12}>
              <h2>Follow Us</h2>
            </Col>
            <Col lg="3" md={6} sm={12}></Col>
            <Col lg="3" md={6} sm={12}></Col>
            <Col lg="3" md={6} sm={12}></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
