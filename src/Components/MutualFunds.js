import React from 'react';
import './mutualfunds.css';
import { Container, Row, Col } from 'react-bootstrap';
import eimage from './imgs/eimg.jpg';

export default function MutualFunds() {
  return (
    <div className="dark-theme">
      {/* Hero Section */}
      <div className="backimage">
        <div className="hero-text">
          <h1>Fincart Mutual Fund Investment <br />Planning Process</h1>
          <p className="hero-subtext">
            Discover the potential of mutual funds with Fincart's expert guidance. Our advisors will design a strategy
            to maximize your wealth through carefully selected mutual fund investments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <Container>
        {/* Section: Understanding Mutual Funds */}
        <Row className="section">
          <h2>Understanding Mutual Fund with Fincart Mutual Fund Advisor</h2>
          <Col lg={6}>
            <p className="section-text">
              A mutual fund is a financial vehicle in which the investors pool money to invest in different markets and securities.
              Such funds are invested based on a particular fund scheme objective. Mutual fund investments are a great source to help
              you achieve your financial goals. Mutual funds aim to generate returns by investing in a diversified mix of assets, reducing
              the risk associated with single-stock investments. They cater to various risk profiles, from conservative to aggressive, offering
              options suitable for different investment objectives and time horizons.
            </p>
            <p className="section-text">
              Investing in mutual funds involves purchasing units of the fund, with each unit representing a portion of the total assets.
              As the fund's holdings appreciate or generate income, investors benefit proportionally. The inherent diversification helps spread
              risk, and investors can choose funds aligned with their financial goals, risk tolerance, and preferences. In essence, mutual funds
              provide a convenient and accessible way for individuals to participate in investment planning, offering the potential for growth while
              minimizing the complexities associated with direct investment in individual securities.
            </p>
          </Col>
          <Col lg={6}>
            <img className="image-section" src={eimage} alt="Mutual Funds" />
          </Col>
        </Row>

        {/* Section: How Do Mutual Funds Work? */}
        <Row className="section">
          <h2>How Do Mutual Funds Work?</h2>
          <Col lg={12}>
            <p className="section-text">
              Under mutual fund investment, funds are pooled from multiple investors to invest in a diversified portfolio of stocks, bonds, or other
              assets. Professional fund managers make investment decisions on behalf of investors. Each investor owns shares proportional to their investment,
              and gains or losses are distributed among shareholders. This structure allows individual investors to access a diversified portfolio without directly
              managing investments, making mutual funds a popular choice for those seeking convenience and diversification in their investments.
            </p>
          </Col>
        </Row>

        {/* Section: Types of Mutual Fund Investment */}
        <Row className="section">
          <h2 className="text-center">Types of Mutual Fund Investment</h2>
          <Col lg={12}>
            <p className="section-text">
              Explore various types of mutual fund investment plans tailored to your financial goals. Trust our expert mutual fund advisors and consultants to guide you toward
              optimal investment strategies for long-term financial success.
            </p>
            <ol className="benefit-list">
              <li><strong>Equity Mutual Funds:</strong> Primarily invest in stocks and equities of various companies, aiming for long-term capital appreciation.</li>
              <li><strong>Debt Mutual Funds:</strong> Invest in fixed-income securities like government bonds and corporate bonds, providing stable returns.</li>
              <li><strong>Gilt Funds:</strong> Invest in government securities, considered low-risk due to sovereign backing.</li>
              <li><strong>Corporate Bond Funds:</strong> Invest in bonds issued by corporations, varying in risk based on the issuer's creditworthiness.</li>
              <li><strong>Liquid Funds:</strong> Invest in short-term money market instruments, providing high liquidity and safety.</li>
            </ol>
          </Col>
        </Row>

        {/* Section: Why Mutual Funds Investment? */}
        <Row className="section">
          <h2>Why Mutual Funds Investment?</h2>
          <p className="section-text">
            We will delve into the advantages of mutual funds investment and why they are an excellent option for both novice and experienced investors.
          </p>
          <Col lg={12} className="benefit-list">
            <ul>
              <li>Diversification of assets</li>
              <li>Offer high liquidity</li>
              <li>Safety and transparency</li>
              <li>Lower cost</li>
              <li>Tax Benefits</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}