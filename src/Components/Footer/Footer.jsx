 import React from 'react'
 import './footer.css'
 import footerlg from '../Footer/footerlg.png'
 import { Col, Container, Row } from 'react-bootstrap'
 import { FaFacebookF } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa6";
 
 const Footer = () => {
   return (
     <section id='footer'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="footer_left">
                    <img src={footerlg} alt="" />
                    <p>We are always open to discuss your project and improve your online presence.</p>
                    <div className="contact">
                        <p>Email me at <span>Call us</span></p>
                        <div className="c_details">
                        <p>contact@website.com <span>0927 6277 28525</span></p>
                    </div>
                    </div>
                   
                </div>
                </Col>
                <Col lg={6}>
                <div className="footer_right">
                <h1>Lets Talk!</h1>
                </div>
                <div className="footer_icons">
                <a href="#"><FaFacebookF /></a> 
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a> 
                <a href="#"><FaLinkedin /></a> 
                </div>
                
                </Col>
            </Row>
        </Container>

     </section>
   )
 }
 
 export default Footer