import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Import the CSS file

export default function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-heading">FINANCIAL PLANS</h5>
              <ul className="footer-list">
                <li>Financial Planning</li>
                <li>Investment Planning</li>
                <li>Goal Planning</li>
                <li>Risk Management</li>
                <li>Tax Saving And Planning</li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-heading">INVESTMENT PLANS</h5>
              <ul className="footer-list">
                <li>Mutual Funds</li>
                <li>SIP</li>
                <li>Income Returns</li>
                <li>Portfolio Management Services</li>
                <li>Gold</li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-heading">LOAN HUB</h5>
              <ul className="footer-list">
                <li>Home Loan</li>
                <li>Business Loan</li>
                <li>Personal Loan</li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-heading">CONTACT INFO</h5>
              <ul className="footer-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i> NCPL Tower Ground & 2nd Floor, A-4, A Block, Sector 9
                </li>
                <li><i className="fas fa-phone"></i> +91 1234567890</li>
                <li><i className="fas fa-envelope"></i> finance@gmail.com</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-heading">PLAN FOR TOMORROW</h5>
              <ul className="footer-list">
                <li>Workshop</li>
                <li>Corporate NPS</li>
                <li>Group Health Insurance</li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-heading">INSURANCE</h5>
              <ul className="footer-list">
                <li>Health Insurance</li>
                <li>Term Insurance</li>
                <li>Critical Insurance</li>
                <li>Asset Insurance</li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-heading">LEGAL</h5>
              <ul className="footer-list">
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Disclosures</li>
                <li>Career</li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5 className="footer-heading">FOLLOW US</h5>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-instagram-square"></i></a>
                <a href="#"><i className="fab fa-youtube-square"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footsec">
        <Container>
          <Row>
            <Col lg={12}>
              <h6 className="footer-bottom-text">Copyright © 2024 Fincart | Powered By Fincart</h6>
              <p className="footer-subtext">
                Virtual Financial Advisory Across India: Serving Major clientele in these cities
              </p>
              <p className="footer-description">
                Financial planning services offer the advantages of professional expertise, objective guidance, and personalized strategies to help individuals and businesses achieve financial success.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}