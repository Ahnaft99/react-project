import React from 'react'
import './feature.css'
import{ Col, Container, Row } from'react-bootstrap'
import friend from '../Feature/friend.png'
import FeatureReusable from '../Reusable/FeatureReusable'
import right from '../Feature/right.png'
import pen from '../Feature/pen.png'
import question from '../Feature/question.png'
import time from '../Feature/time.png'
import note from '../Feature/note.png'

const Feature = () => {
  return (
   <section id='feature'>
    <Container>
        <Row>
            <Col lg={12}>
            <div className="main">
            <p>Feature</p>
            <h3>Design that solves <br />problems, one product at <br /> a time</h3>
            </div>  
            
            </Col>
        </Row>
        <Row className='py-5'>
            <FeatureReusable image={friend} title ='Uses Client First'/>
            <FeatureReusable image={right} title ='Two Free Revision Round' />
            <FeatureReusable image={pen} title ='Template Customization'/>
            <FeatureReusable image={question} title ='24/7 Support'/>
            <FeatureReusable image={time} title ='Quick Delivery'/>
            <FeatureReusable image={note} title ='Hands-on approach'/>
        
        </Row>
    </Container>


   </section>
  )
}

export default Feature