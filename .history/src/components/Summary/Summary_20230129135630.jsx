import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <h1 className="countNumber">35000</h1>
                      <h4 className="countTitle">Students WorldWide</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                    <Col>
                      <h1 className="countNumber">22</h1>
                      <h4 className="countTitle">Students WorldWide</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                    <Col>
                      <h1 className="countNumber">3000</h1>
                      <h4 className="countTitle">Student Reviews</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        What I have Achieved
                      </Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle">Requirement Gathering</p>
                        <p className="cardSubTitle">System Analysis</p>
                        <p className="cardSubTitle">Coding Test</p>
                        <p className="cardSubTitle">Implementation</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
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