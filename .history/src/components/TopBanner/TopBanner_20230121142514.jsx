import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.css";

export class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container className="topFixedBanner">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1>EASY LEANING</h1>
                  <h4>Learn Professionally</h4>
                  <Button variant="primary">Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
