import React from "react";
import "./Services.css"

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How SmartHomeRo can help you!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
            <ion-icon name="bar-chart-outline"/>
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Make your life easier
              </div>
              <div className="section-text__desc">
              Increased Efficiency: Technology can automate many tasks that previously required significant time and effort, such as scheduling appointments, paying bills, or ordering groceries online. This can save you time and free up mental energy for other tasks.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
            <ion-icon name='cash-outline' />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Make more economy</div>
              <div className="section-text__desc">
              By using a smart home system to monitor and manage your energy and water usage, you can save money on your bills and reduce your environmental impact. Plus, the convenience of having an automated home can simplify your daily routines and give you more time and energy to focus on the things that matter most to you.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
            <ion-icon name="lock-closed-outline"/>
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Stay connected </div>
              <div className="section-text__desc">
              Overall, staying connected with your home can provide you with many benefits, from increased security to improved energy efficiency. With the help of smart home technology, you can stay connected with your home from anywhere, at any time, and simplify your daily routines.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;