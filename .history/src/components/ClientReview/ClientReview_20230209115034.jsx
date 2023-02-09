import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class ClientReview extends Component {
  render() {
    var settings = {
      autoPlaySpeed: 3000,
      autoPlay: true,
      dots: true,
      infinite: true,
      vertical: true,
      verticalSwiping: 1,
      speed: 3000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container fluid={true} className="siderBack text-center">
          <h1 className="reviewMainTitle p-3">TEST MOIAL</h1>
          <div className="reviewBottom"></div>
          <Slider {...settings}>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&uid=R91501435&ga=GA1.2.1662293289.1675141153&semt=sph"
                  />
                  <h2 className="reviewName">masamichan</h2>
                  <p className="reviewDescription">
                    Hi! I'm Masami Iwakiri. I'm a web developer with a serious
                    love for teaching.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://img.freepik.com/free-vector/web-development-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-developer-project-engineer-programming-software-or-application-design-cartoon-illustration_107791-3863.jpg?w=1800&t=st=1675910482~exp=1675911082~hmac=48c950dd1b1edc07b4a8ff7f2c29a84f91433c43b3d771293bf10ca58db03984"
                  />
                  <h2 className="reviewName">Jack ma</h2>
                  <p className="reviewDescription">
                    Hi! I'm Masami Iwakiri. I'm a web developer with a serious
                    love for teaching.
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://img.freepik.com/free-vector/hand-drawn-web-developers-working_23-2148819605.jpg?w=1380&t=st=1675910513~exp=1675911113~hmac=0c505cd49d7298fb0cbe526468a8417258ac84a1e4fb1a1326b241a88143f55f"
                  />
                  <h2 className="reviewName">Jhon</h2>
                  <p className="reviewDescription">
                    Hi! I'm Masami Iwakiri. I'm a web developer with a serious
                    love for teaching.
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
