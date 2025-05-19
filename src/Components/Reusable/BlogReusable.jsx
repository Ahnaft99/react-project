import React from 'react'
import {Col} from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
const BlogReusable = ({image, }) => {
  return (
    <Col lg={4}>
                <div className="blog_last">
                    <img src={image} alt="" />
                <span>19 Jan 2022</span>
                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <a href="#">Read More <FaArrowRightLong /></a>
                </div>
                

                </Col>
  )
}

export default BlogReusable