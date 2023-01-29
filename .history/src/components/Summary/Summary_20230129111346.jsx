import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay"></div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
