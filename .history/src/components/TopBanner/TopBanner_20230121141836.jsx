import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../asset/css/custom.css";

export class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container className="topFixedBanner">
          <div className="topBannerOverlay">
            <Container>
              <Row>
                <Col>
                  <h1>EASY LEANING</h1>
                  <h4>Learn Professionally</h4>
                  <Button variant="primary">Primary</Button>
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
