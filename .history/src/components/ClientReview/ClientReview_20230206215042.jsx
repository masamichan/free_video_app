import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class ClientReview extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="siderBack">
          <h1 className="reviewMainTitle">TEST MOIAL</h1>
          <div className="reviewBottom"></div>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
