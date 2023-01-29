import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay">
            <Container>
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row>
                    <Col>
                      <h1 className="countName">35000</h1>
                      <h4 className="countTitle">Students WorldWide</h4>
                    </Col>
                    <Col>
                      <h1>22</h1>
                      <h4>Students WorldWide</h4>
                    </Col>
                    <Col>
                      <h1>3000</h1>
                      <h4>Student Reviews</h4>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <h1>Four</h1>
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
