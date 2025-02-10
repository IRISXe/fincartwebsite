import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <div className='image'>
        <div className='text'>
          <h1>Portfolio Management Services</h1>
          <p className='fs-6 p-4'>
            Take the guesswork out of investing with Fincarts portfolio management services.<br />
            Our experts customize portfolios to suit your risk tolerance and financial goals,<br /> ensuring optimal returns.
            Connect now!
          </p>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <h2 className='mt-5 p-3'>Portfolio Management Advisory Service</h2>
            <Col lg={12}>
              <p className='fw-light text-black' style={{ textAlign: 'left', padding: '20px' }}>
                Portfolio Management Service is a professional as well as licensed service provided by portfolio managers
                or investment advisory firms. It is regulated by SEBI (Securities and Exchange Board of India). Under
                portfolio management, tailor-made investment solutions are provided based on the client's objectives, risk
                tolerance, and investment preferences.
              </p>
              <p className='fw-light text-black' style={{ textAlign: 'left', padding: '20px' }}>
                Portfolio management is backed by highly experienced and qualified portfolio managers who conduct research,
                analyze markets and trends, and accordingly make informed decisions. They monitor your portfolios,
                rebalance them, and make the necessary investment adjustments as per your needs!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='container'>
        <Row>
          <Col lg={12}>
            <div className='box-row'>
              <h2>Why Choose Portfolio Management Advisory Services?</h2>
              <p>
                Understanding why investment is important to you is vital before seeking any kind of investment advice. Here are
                some reasons why one should consider portfolio advisory services:
              </p>
              <ul>
                <li className='fw-semibold fs-5'>Diversification :</li>
                <p>
                  By investing in a variety of assets across different industries, sectors, and regions, portfolio management
                  allows for diversification.
                </p>
                <li className='fw-semibold fs-5'>Risk management :</li>
                <p>
                  Through diversification, risk can be spread across different assets, which can help protect against unexpected
                  events and market volatility.
                </p>
                <li className='fw-semibold fs-5'>Monitoring and rebalancing :</li>
                <p>
                  In portfolio management, investments are actively monitored and periodically rebalanced.
                </p>
                <li className='fw-semibold fs-5'>Long-term focus :</li>
                <p>
                  Typically, portfolio management has a long-term focus, aiming to achieve sustainable growth.
                </p>
                <li className='fw-semibold fs-5'>Maximizing returns :</li>
                <p>
                  A portfolio manager seeks to maximize returns within a given risk tolerance by carefully selecting investments
                  and adjusting portfolio allocation accordingly.
                </p>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Container>
          <Row>
            <Col lg={12}>
              <h2>Benefits of Portfolio Management Services</h2>
              <ul>
                <li className='fw-semibold fs-5'><u>Diversification of Risks</u></li>
                <p>
                  Portfolio management services spread your investments across various assets, reducing the impact of poor
                  performance of any single investment on the overall portfolio, thereby minimizing risks.
                </p>
                <li className='fw-semibold fs-5'><u>Ensures Maximum Returns</u></li>
                <p>
                  PMS services aim to maximize returns by actively managing the portfolio. Professional portfolio managers analyze
                  market trends, economic conditions, and individual securities to make informed investment decisions.
                </p>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
