import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay"></div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
