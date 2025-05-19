import React from 'react'
import './faq.css'
import { Col, Container, Row } from 'react-bootstrap'

const Faq = () => {
  return (
    <section id='faq'>
        <Container>
            <Row>
                <Col lg={4}>
                <div className="faq_left">
                    <h2>Frequently asked questions</h2>
                    <a href="#">Contact us for more info</a>
                </div>
                </Col>
                <Col lg={8}>
                <div className="faq_right">
                    <ul>
                        <li><h3><span>01</span>How much time does it take?</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
                        <li><h3><span>02</span>How much time does it take?</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
                        <li><h3><span>03</span>How much time does it take?</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
                        <li><h3><span>04</span>How much time does it take?</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
                        <li><h3><span>05</span>How much time does it take?</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>
                    </ul>
                </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Faq