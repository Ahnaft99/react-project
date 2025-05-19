import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './work.css'
import { FaArrowRightLong } from "react-icons/fa6";
import pointer from "../Work/pointer 1.png"
import two from "../Work/two.png"
import three from "../Work/three.png"
import four from "../Work/four.png"
import WorkReusable from '../Reusable/WorkReusable';

const Work = () => {
  return (
    <section id='work'>
        <Container>
            <Row>
                <Col lg={4}>
                <div className="work_left">
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#">Get in touch with us <FaArrowRightLong /></a>
                </div>
                </Col>
                <Col lg={8}>
                <Row>
                  <WorkReusable img={pointer} title='Strategy'/>
                  <WorkReusable img={two} title='Wireframing'/>
                  <WorkReusable img={three}  title='Design'/>
                  <WorkReusable img={four} title='Development'/>
                </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work