import React from 'react'
import{Col} from 'react-bootstrap'

const FeatureReusable = ({image, title}) => {
  return (
    <Col lg={4}>
            <div className="icon">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
            </div>
            
            </Col>
  )
}

export default FeatureReusable