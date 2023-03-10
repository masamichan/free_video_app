import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
                      <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                      <h1 className="countNumber">3500</h1>
                      <h4 className="countTitle">Students WorldWide</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                    <Col>
                      <FontAwesomeIcon
                        className="iconProject"
                        icon={faLaptop}
                      />
                      <h1 className="countNumber">22</h1>
                      <h4 className="countTitle">Students WorldWide</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                    <Col>
                      <FontAwesomeIcon className="iconProject" icon={faStar} />
                      <h1 className="countNumber">3000</h1>
                      <h4 className="countTitle">Student Reviews</h4>
                      <hr className="bg-white w-25" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        What I have Achieved
                      </Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />
                          Requirement Gathering
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />
                          System Analysis
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />
                          Coding Testing
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullent"
                            icon={faCheckSquare}
                          />
                          Implementation
                        </p>
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
