import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-upper">
        <div className="section-text__title-centered text-white">
          Our pricing
        </div>
      </div>
      <div className="pricing-lower">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Ultra security</span>
              <div className="pricing-card__title">
                3500<span> RON</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>5 video camera</li>
              <li>1 smart lock door</li>
              <li>1 alarma</li>
            </ul>
            <a href="#contact" className="pricing-card__btn">
              Order
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Mega saving</span>
              <div className="pricing-card__title">
                4000<span>RON</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Gas control</li>
              <li>Electric current control</li>
              <li>Aqua control</li>
            </ul>
            <a href="#contact" className="pricing-card__btn">
            Order
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Friendly home</span>
              <div className="pricing-card__title">
                7500<span> RON</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Home proximity</li>
              <li>Voice control</li>
              <li>Open door without key</li>
            </ul>
            <a href="#contact" className="pricing-card__btn">
            Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
