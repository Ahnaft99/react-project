import React from 'react'
import {Col} from 'react-bootstrap'
const TeamReusable = ({image, title}) => {
  return (
    <Col lg={4}>
                <div className="team_item">
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                </Col>
  )
}

export default TeamReusable