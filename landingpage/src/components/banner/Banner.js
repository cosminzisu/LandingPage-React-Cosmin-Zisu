import React from "react";
import { Row, Container } from "react-bootstrap";
import "./Banner.css";

function HeroBanner() {
  return (
    <section id="home">
      <Container>
        <Row>
          <div className="home-text">
            <div className="section-text__subtitle"> Your home care.</div>
            <div className="section-text__title-big">
              Make your home more friendly
            </div>
            <div className="section-text__body">
            Intelligent living, simplified.
            </div>
            <a href="#contact" className="contact-btn">
              Contact Us
            </a>
          </div>

          <div className="section-image">
            <img src="./images/logo.jpg" alt="App Preview" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;