import React from 'react'
import './project.css'
import{ Col, Container, Row } from 'react-bootstrap'
import card from '../Project/tumi.png'
import card2 from '../Project/apni.png'

const Project = () => {
  return (
   <section id='project'>
    <Container>
        <Row>
            <Col lg={8}>
            <div className="project_head">
                <h2>View our projects</h2>
                <div className="background">
                   <img className='project_left' src={card} alt="" />
                
                </div>
               
            </div>
            </Col>
            <Col lg={4}>
            <Row>
                <Col lg={12}>
    <img  className='project_right'src={card2} alt="" />
                </Col>
                <Col lg={12}>
    <img  className='project_right'src={card2} alt="" />
                </Col>
            </Row>
            </Col>
           
        </Row>
    </Container>
   </section>
  )
}

export default Project