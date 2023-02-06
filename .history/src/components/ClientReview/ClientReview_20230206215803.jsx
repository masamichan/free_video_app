import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class ClientReview extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="siderBack text-center">
          <h1 className="reviewMainTitle p-3">TEST MOIAL</h1>
          <div className="reviewBottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
