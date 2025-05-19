import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './design.css'
import group from '../Design/group.png'

const Design = () => {
  return (
   <section id='about'>
    <Container>
        <Row>
            <Col lg={6}>
            <div className="about_left">
                <span>About us</span>
                <h1>Our designs solve problems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            
            </Col>
            <Col lg={6}>
            <img src={group} alt="" />
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Design