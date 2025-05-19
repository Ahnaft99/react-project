import React from 'react'
import {Col} from 'react-bootstrap'

const WorkReusable = ({img, title}) => {
  return (
    <Col lg={6}>
    <div className="work_right">
        <img className='pointer' src={img} alt="" />
        <h3>{title}</h3>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
    </div>
    </Col>
  )
}

export default WorkReusable