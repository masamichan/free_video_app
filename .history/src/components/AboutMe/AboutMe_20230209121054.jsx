import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../asset/image/fotor_2023-2-9_12_5_18.png";

export class AboutMe extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={face} />
            </Col>
            <Col lg={6} md={6} sm={12}></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;
