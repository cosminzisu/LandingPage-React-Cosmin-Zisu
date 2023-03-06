import React from "react";
import { Row, Container } from "react-bootstrap";

function Features() {
  return (
    <section id="features">
      <Container>
        <Row>
          <div className="section-image-features">
            <img src="./images/features.webp" width="200" alt="features" />
          </div>
          <div className="section-text">
            <div className="section-text__title">Features</div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">Home Security</div>
                <div className="section-text__desc">
                  Secure your house with alarm systems, professional cameras and automatic locks. 
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Energy saver
                </div>
                <div className="section-text__desc">
                  Control your energy from home with your smartphone.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Home control
                </div>
                <div className="section-text__desc">
                 Close the door, open windows and other with your smartphone.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">Home monitoring</div>
                <div className="section-text__desc">
                 You will receive a message when something happens in your home.
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Features;