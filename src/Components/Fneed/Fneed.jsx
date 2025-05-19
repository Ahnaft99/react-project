import React from 'react'
import './fneef.css'
import { Col, Container, Row } from 'react-bootstrap'
import right from '../Fneed/right.png'

const Fneed = () => {
  return (
    <section id='features'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="feature_left">
                    <h2>All the features <br /> you need</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#">View Pricing</a>
                </div>
                </Col>
                <Col lg={6}>
                <div className="feature_right">
                  <img src={right} alt="" />
                </div>
               
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Fneed