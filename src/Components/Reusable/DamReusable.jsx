import React from 'react'
import {Col} from 'react-bootstrap'

const DamReusable = ({image, title, price}) => {
  return (
    <Col lg={4}>
                <div className="dam_item">
                  
                        <h4>{price} <span>Per Design</span></h4>
                        <h2>{title} </h2>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                        <ul>
                            <li><img src={image} alt="" /><span>All limited links</span></li>
                            <li><img src={image} alt="" /><span>Own analytics platform</span></li>
                            <li><img src={image} alt="" /><span>Chat support</span></li>
                            <li><img src={image} alt="" /><span>Optimize hashtags</span></li>
                            <li><img src={image} alt="" /><span>Unlimited users</span></li>
                        </ul>
                            
                        <div className="get">
                    <a href="#">Get started</a>
                </div>
                </div>
                </Col>
  )
}

export default DamReusable