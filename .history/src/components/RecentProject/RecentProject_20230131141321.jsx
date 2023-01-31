import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="serviceMainTitle">Recent Project</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-and-reports-employees-meeting-at-business-training-seminar-or-conference-vector-illustration-for-presentation-lecture-education_74855-8294.jpg?size=626&ext=jpg&uid=R91501435&ga=GA1.1.1662293289.1675141153&semt=sph"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col g={4} md={6} sm={12}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/student-with-laptop-studying-on-online-course_74855-5293.jpg?w=2000&t=st=1675141663~exp=1675142263~hmac=bafdc86aa840b6f4b517c01e98cbbe1101aa4c87a95d7f19a2da1f4aa4c70711"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col g={4} md={6} sm={12}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RecentProject;
