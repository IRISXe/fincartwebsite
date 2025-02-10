import React from 'react';
import './contact.css';
import { Row, Col, Container } from 'react-bootstrap';
import kimage from './imgs/kimg.jpg';
import Cards from './Cards';
import Rmap from './Rmap';

export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <div className="bimg">
        <div className="text">
          <h1>Contact Us</h1>
          <p>
            At Fincart, we believe every financial journey is unique. Our certified financial advisors are
            here to help you with risk analysis, investment planning, and achieving your financial goals.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bgrnd">
        <div className="container">
          <Row>
            <Col lg={8}>
              <div className="tbox">
                <h3>Get in Touch</h3>
                <p>
                  Need advice or have questions? Contact us to schedule a discovery session with Fincart's Financial
                  Planning Services. We'll assess your financial situation and create a plan just for you.
                </p>
              </div>

              <div className="fbox">
                <h3>Contact the Financial Planning Team</h3>
                <input type="text" className="field" placeholder="Enter your Name" />
                <input type="email" className="field" placeholder="Enter your Email" />
                <input type="tel" className="field" placeholder="Enter Phone Number" />
                <button>Submit</button>
              </div>
            </Col>
            <Col lg={4}>
              <img
                className="d-block w-100"
                style={{ marginTop: '80px', height: '350px', borderRadius: '10px' }}
                src={kimage}
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row-2">
        <Container>
          <Cards />
        </Container>
      </div>

      {/* Contact Info Section */}
      <div className="container">
        <h1 className="text-center mt-5">Contact Info</h1>
        <div className="contact-section">
          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Number</h3>
            <p>+91-7247075470</p>
          </div>

          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>info@fincart.com</p>
          </div>

          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Address</h3>
            <p>NCPL Tower Ground & 2nd Floor, A-4, A Block</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div>
        <Rmap />
      </div>
    </div>
  );
}
