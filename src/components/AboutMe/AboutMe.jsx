import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class AboutMe extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}></Col>
            <Col lg={6} md={6} sm={12}></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;
