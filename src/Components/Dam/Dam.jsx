import React from 'react'
import './dam.css'
import { Col, Container, Row } from 'react-bootstrap'
import arrow from '../Dam/arrow.png'
import DamReusable from '../Reusable/DamReusable'

const Dam = () => {
  return (
    <section id='dam'>
        <Container>
            <Row>
                <Col lg={12}>
                <div className="dam_head">
                    <h2>Our Pricing Plans</h2>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow is <br />ready to help you bring your designs to life — without coding them.</p>
                </div>
                </Col>
                <DamReusable image ={arrow} title ='Landing Page' price ='$299'/>
                <Col lg={4}>
                <div className="dam_item_bg">
                  
                        <h4>$399 <span>Multi Design</span></h4>
                        <h2>Website Page  </h2>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                        <ul>
                            <li><img src={arrow} alt="" /><span>All limited links</span></li>
                            <li><img src={arrow} alt="" /><span>Own analytics platform</span></li>
                            <li><img src={arrow} alt="" /><span>Chat support</span></li>
                            <li><img src={arrow} alt="" /><span>Optimize hashtags</span></li>
                            <li><img src={arrow} alt="" /><span>Unlimited users</span></li>
                        </ul>
                            
                        <div className="get">
                    <a href="#">Get started</a>
                </div>
                </div>
                </Col>
                <DamReusable image ={arrow} title='Complex Project' price ='$499 +' />
               
            </Row>

        </Container>

    </section>
  )
}

export default Dam