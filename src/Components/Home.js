import React from 'react';
import './home.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="background">
        <div className="text">
          <h1>Expert Financial Planning Services</h1>
          <p>
            Get expert financial advice in Bangalore with personalized planning for investments, wealth management, and securing your financial future.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <Container className="intro-section">
        <h2>Best Financial Advisor in Bangalore</h2>
        <Row>
          <Col md={8} className="mx-auto">
            <p>
              To achieve your financial goals in life, having a financial planner by your side is the best decision you can make. Financial planners assist
              you in overcoming financial obstacles to reach your financial goals. By people’s choice, we are the best financial advisor in Bangalore.
              It's no secret that financial planners are on the rise, but what makes us the best financial services company in Bangalore?
            </p>
            <p>Here’s what you need to know!</p>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Container className="services-section">
        <h2>Financial Planning Services Offered by Fincart in Bangalore</h2>
        <Row>
          <Col md={10} className="mx-auto">
            <div className="box">
              <ul>
                <li>
                  <h3>Investment Planning Services</h3>
                  <p>
                    Investment Planning Services are aimed at helping you create a robust investment portfolio that aligns with your risk tolerance,
                    time horizon, and financial objectives. Whether you're looking to invest in mutual funds, stocks, bonds, or other financial instruments,
                    our expert advisors will guide you in making informed decisions to maximize your returns.
                  </p>
                </li>
                <li>
                  <h3>Retirement Planning Services</h3>
                  <p>
                    Planning for retirement is crucial to ensuring a comfortable and secure future. At Fincart, our Retirement Planning Services
                    focus on creating a detailed plan that helps you accumulate the necessary funds for your post-retirement life. We consider factors such as
                    inflation, life expectancy, and your desired lifestyle to develop a strategy that ensures you won't outlive your savings.
                  </p>
                </li>
                <li>
                  <h3>Tax Optimization Services</h3>
                  <p>
                    Effective tax planning can significantly enhance your wealth accumulation. Our Tax Optimization Services are designed to help
                    you minimize your tax liabilities while staying compliant with the law. We analyze your financial situation and advise you on
                    tax-saving investments, deductions, and exemptions that can reduce your overall tax burden.
                  </p>
                </li>
                <li>
                  <h3>Insurance Analysis Services</h3>
                  <p>
                    Having the right insurance coverage is essential for protecting your financial well-being. Our Insurance Analysis Services
                    involve a thorough review of your current insurance policies and identifying any gaps in coverage. We provide recommendations on the
                    types and amounts of insurance you need to safeguard your assets and provide financial security for your loved ones.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Benefits Section */}
      <div className="section">
        <Container>
          <h2>Benefits of Financial Planning Services in Bangalore</h2>
          <Row>
            <Col md={8} className="mx-auto">
              <ol>
                <li>
                  Financial planning services help individuals and businesses define their short-term and long-term financial goals. They provide a structured approach to goal setting and help clients gain clarity on their financial aspirations.
                </li>
                <li>
                  Income, expenses, assets, and liabilities are examined by financial planners to determine a client's current financial situation. They consider various factors such as risk tolerance, time horizon, and financial commitments to provide a holistic view of the client's financial health.
                </li>
                <li>
                  Based on the analysis of the client's financial situation and goals, financial planners develop personalized strategies to help achieve those goals. They consider investment options, tax implications, retirement planning, estate planning, and risk management to create a tailored financial roadmap.
                </li>
                <li>
                  They help clients identify and mitigate financial risks. They evaluate insurance needs, assess risk tolerance, and recommend appropriate insurance coverage to protect against unforeseen events such as accidents, disability, illness, or loss of income.
                </li>
                <li>
                  Financial planners assist clients in making informed investment decisions. They consider factors such as risk appetite, investment horizon, and financial goals to create an investment portfolio aligned with the client's objectives. They also monitor and review investments regularly, making adjustments as needed.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}