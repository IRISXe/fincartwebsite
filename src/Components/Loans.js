import React from 'react';
import './loans.css';
import { Container, Row, Col } from 'react-bootstrap';
import pimage from './imgs/pimg.jpg';

export default function Loans() {
  return (
    <div>
      <div className='bgimg'>
        <div className='text'>
          <h1>Transforming Your Aspirations into Reality</h1>
          <p>
            At Fincart, we are a premier Direct Selling Agent (DSA) dedicated to providing tailored loans.<br />
            Our goal is to streamline your loan process, making it accessible and straightforward.
          </p>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col lg={6}>
              <h2>Find Your Ideal Loan Terms with Our Expert Guidance</h2>
              <p>
                At Fincart, we are a premier Direct Selling Agent (DSA) dedicated to providing tailored loans.
                Our goal is to streamline your loan process, making it accessible and straightforward.
                With a team of experienced professionals, we offer expert guidance and support throughout every stage of your loan journey.
              </p>
              <p>
                We understand that each financial situation is unique, which is why we provide personalized loan options
                designed to meet your specific needs. Our commitment to transparency means you'll receive clear information
                about your loan terms and conditions, ensuring there are no surprises along the way.
              </p>
              <p>
                At Fincart, customer satisfaction is our top priority. We work tirelessly to deliver a seamless experience,
                from application to disbursement, and strive to be your trusted partner in achieving your financial goals.
                Whether you need funds for personal expenses, travel, or any other purpose, we are here to help you secure
                the loan that's right for you.
              </p>
            </Col>
            <Col lg={6}>
              <img className='d-block w-100' src={pimage} alt='Loan services' />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <h2 className='mt-4'>Better Than All: Fincart’s Home Loans</h2>
            <Col lg={12}>
              <ul>
                <li>Client-Centric Approach:</li>
                <p>
                  We at Fincart prioritize your needs, offering the most competitive rates, tailored solutions, and
                  end-to-end services right at your doorstep to meet your specific home loan requirements.
                </p>
                <li>Robust Privacy Measures:</li>
                <p>
                  We prioritize your privacy with state-of-the-art encryption and secure data handling practices,
                  ensuring that your personal and financial information remains confidential throughout the loan process.
                </p>
                <li>Quick Turnaround Time:</li>
                <p>
                  Our efficient processes ensure swift approval and disbursement of your home loan, making your home-buying
                  journey smooth and hassle-free.
                </p>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <h2 className='mt-4'>Benefits and Features of Fincart Business Loans</h2>
            <p>
              Our mission is to offer accessible and flexible financing options to businesses of all sizes:
            </p>
            <Col lg={3}>
              <ul>
                <li>Customized Loan Solutions</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <li>Dedicated Support</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <li>Flexible Repayment Terms</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <li>Competitive Interest Rates</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <h2 className='mt-5'>Better Than All: Fincart’s Personal Loans</h2>
            <Col lg={12}>
              <p>
                At Fincart, we offer a range of home loan products designed to help you achieve your dream of homeownership.
                Whether you’re buying your first home, upgrading to a bigger space, or investing in property, our team of
                experts is here to guide you every step of the way. Trust Fincart to be your reliable partner in achieving your
                homeownership dreams.
              </p>
              <p>
                With competitive interest rates, flexible repayment options, and personalized customer service, we cater
                to both first-time homebuyers and seasoned investors. Our streamlined application process ensures quick
                approvals, so you can focus on finding the perfect home.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
