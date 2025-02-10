import React from "react";
import "./insurance.css";
import { Container, Row, Col } from "react-bootstrap";
import himage from "./imgs/himg.jpg";

export default function Insurance() {
  return (
    <div className="dark-theme">
      {/* Hero Section */}
      <section className="backgroundimg">
        <div className="hero-text">
          <h1>What medical expenditure does a <br /> Health Insurance Policy Cover?</h1>
          <p className="hero-subtext">
            Don’t wait until it’s too late! Protect yourself and your loved ones today with Fincart’s best
            health insurance solutions. Our health insurance planner and advisor help you find the right plan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main>
        <Container>
          {/* Section: What is Health Insurance */}
          <section className="section">
            <h2>What is Health Insurance?</h2>
            <Row>
              <Col lg={12}>
                <p className="section-text">
                  Health insurance is a financial safety net that covers medical expenses arising from illnesses, injuries, or hospitalizations.
                  It helps individuals and families manage healthcare costs by providing coverage for treatments, surgeries, and other medical services.
                </p>
              </Col>
            </Row>
          </section>

          {/* Section: Importance of Health Insurance */}
          <section className="section">
            <h2>Why Is Health Insurance Important for Your Family's Well-being?</h2>
            <Row>
              <Col lg={12}>
                <p className="section-text">
                  Loved ones falling sick with any critical disease is emotionally draining. It disturbs the entire family and becomes a significant financial burden.
                  Further, medical inflation remains high year on year. Health Insurance can’t reduce the emotional upheaval but can alleviate financial concerns.
                </p>
              </Col>
              <Col lg={4}>
                <ul className="benefit-list">
                  <li>Tax Benefits Under Section 80D</li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="benefit-list">
                  <li>Coverage of Medical Expenses</li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="benefit-list">
                  <li>Lifetime Renewability Benefit</li>
                </ul>
              </Col>
            </Row>
          </section>

          {/* Section: Medical Expenditures Covered */}
          <section className="boxsec">
            <Row>
              <Col lg={12}>
                <h2>What Medical Expenditures Are Covered Under Health Insurance?</h2>
                <p className="section-text">
                  A health insurance policy covers all medical expenses as per the terms and conditions mentioned in the policy documents.
                  Most health insurance plans cover hospitalization expenses, daycare treatments, medical tests, ambulance services, and specialist consultation charges.
                </p>
                <ul>
                  <li className="subheading">Investment Planning Services</li>
                  <p className="section-text">
                    Investment Planning Services are aimed at helping you create a robust investment portfolio that aligns with your risk tolerance,
                    time horizon, and financial objectives. Whether you're looking to invest in mutual funds, stocks, bonds, or other financial instruments,
                    our expert advisors will guide you in making informed decisions to maximize your returns.
                  </p>
                  <li className="subheading">Retirement Planning Services</li>
                  <p className="section-text">
                    Planning for retirement is crucial to ensuring a comfortable and secure future. At Fincart, our Retirement Planning Services
                    focus on creating a detailed plan that helps you accumulate the necessary funds for your post-retirement life. We consider factors such as
                    inflation, life expectancy, and your desired lifestyle to develop a strategy that ensures you won’t outlive your savings.
                  </p>
                </ul>
              </Col>
            </Row>
          </section>

          {/* Section: Determining Right Health Insurance */}
          <section className="section">
            <h2>How to Determine the Right Health Insurance Coverage for You?</h2>
            <Row>
              <Col lg={6}>
                <p className="section-text">
                  To understand the required amount, consider factors like your current age, hospital preference, family health condition, and affordability.
                  Healthcare costs vary from one hospital to another based on status and facilities. Our relationship managers structure health insurance
                  coverage with high hospitalization coverage at the least possible premium. Additionally, you can save taxes optimally under Section 80D of the Income Tax Act.
                </p>
              </Col>
              <Col lg={6}>
                <img className="image-section" src={himage} alt="Health Insurance Coverage" />
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    </div>
  );
}