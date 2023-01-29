import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="topTitle">EASY LEANING</h1>
                  <h4 className="topSubTitle">Learn Professionally</h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
