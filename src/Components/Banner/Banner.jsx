import React from 'react'
import{ Col, Container, Row } from'react-bootstrap'
import'./banner.css'
import { FaArrowRightLong } from "react-icons/fa6";
import banner from '../Banner/right.png'

const Banner = () => {
  return (
    <section id='banner'>
        <Container>
            <Row>
                <Col lg={6}>
                <h1>Building stellar websites for early startups</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <button className='btn'>View our work</button>
                <a href="#">View Pricing <FaArrowRightLong /></a>
                </Col>
                <Col lg={6}>
                    <img className='right' src={banner} alt="" />

                </Col>
            </Row>
        </Container>

    </section>
    
  )
}

export default Banner