import React from 'react'
import './wilson.css'
import { Col, Container, Row } from 'react-bootstrap'

const Wilson = () => {
  return (
    <section id='wilson'>
        <Container>
            <Row>
                <Col lg={4} className='py-3'>
                <div className="wilson_left">
                    <h4>What our clients <br />say about us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit sed.</p>
                </div>
                </Col>
                <Col lg={8}>
                <div className="wilson_right">
                    <h2>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>
                </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Wilson