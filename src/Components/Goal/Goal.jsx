import React from 'react'
import './goal.css'
import { Col, Container, Row } from 'react-bootstrap'
import one from '../Goal/one.png'

const Goal = () => {
  return (
    <section id='goal'>
        <Container className='gray'>
            <Row>
                <Col lg={6}>

                <span>Who we are</span>
                <div className="goal_left">
                    <h3>Goal focussed</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
                <Col lg={6}>

<span>Who we are</span>
<div className="goal_left">
    <h3>Goal focussed</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
</Col>
            </Row>
            <Row>
                <Col lg={12}>
                <div className="goal_img">
                <img src={one} alt="" />
                </div>
              
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Goal