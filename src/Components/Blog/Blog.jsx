import React from 'react'
import './blog.css'
import { Col, Container, Row } from 'react-bootstrap'

import male from '../Blog/male.png'
import woman from '../Blog/woman.png'
import apple from '../Blog/apple.png'
import BlogReusable from '../Reusable/BlogReusable';

const Blog = () => {
  return (
    <section id='blog'>
        <Container>
            <Row>
                <Col lg={12}>
                <h2>Our Blog</h2>
                
                </Col>
               <BlogReusable image ={male}/>
               <BlogReusable image ={woman}/>
               <BlogReusable image ={apple}/>
               
            </Row>
        </Container>


    </section>
   
  )
}

export default Blog