import React from 'react';
import './about.css';
import { Container, Row, Col } from 'react-bootstrap';
import cimage from './imgs/cimg.jpg';
import fimage from './imgs/fimg.jpg';

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="backimg">
        <div className="text">
          <h1>Expert Investment Planning and <br />Advisory Services</h1>
          <p>
            Our advisors will craft personalized strategies and recommend the best investment options tailored to your financial goals.
            Begin your journey with us & maximize your returns!
          </p>
        </div>
      </div>

      {/* Investment Planning Section */}
      <Container className="investment-section">
        <Row>
          <h2>Investment Planning Services: Best Solutions for Your Financial Goals</h2>
          <Col lg={6}>
            <p>
              In the realm of investment planning, an advisor plays a crucial role in guiding individuals and firms toward their financial goals.
              Investment advisors are instrumental in helping you identify suitable investment opportunities and create a robust portfolio tailored to your needs.
            </p>
            <p>
              With a focus on risk management and long-term growth, our experts ensure your investments align with your financial aspirations.
            </p>
          </Col>
          <Col lg={6}>
            <img className="d-block w-100" src={cimage} alt="Investment Planning" />
          </Col>
        </Row>
      </Container>

      {/* Choosing the Best Provider Section */}
      <div className="provider-section">
        <Container>
          <Row>
            <h2>Choosing the Best Investment Planning Service Provider</h2>
            <Col lg={12}>
              <p>
                Selecting the right investment planning service provider is crucial for your financial success. Look for a provider with a proven track record,
                extensive experience, and a solid reputation in the industry. At Fincart, we pride ourselves on delivering expert guidance, customized solutions,
                and dedicated support to help you achieve your financial aspirations.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* SIP Investment Section */}
      <Container className="sip-section">
        <Row>
          <h2>What is SIP Investment? A Smart Way to Grow Your Wealth</h2>
          <Col lg={6}>
            <img className="d-block w-100" src={fimage} alt="SIP Investment" />
          </Col>
          <Col lg={6}>
            <p>
              SIPs, or Systematic Investment Plans, are widely favored for investing in Mutual Funds. They promote financial discipline and help in growing wealth
              over time. Through SIPs, you can begin with modest amounts and steadily build up savings in an organized way.
            </p>
            <p>
              SIPs are ideally suited for long-term wealth creation as they encourage regular and disciplined investing, allowing investors to benefit from the
              potential growth of the underlying investments in the mutual fund scheme over time.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}