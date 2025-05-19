import React from 'react'
import './team.css'
import { Col, Container, Row } from 'react-bootstrap'
import note from '../Team/note.png'
import TeamReusable from '../Reusable/TeamReusable'
import pen from '../Team/pen.png'
import icon from '../Team/Icon.png'
const Team = () => {
  return (
    <section id='team'>
        <Container>
            <div className="team_head">
                <h1>The benefits of working <br />with our team</h1>
            </div>
            <Row className='py-5'>
               <TeamReusable image={note} title ='Customize with ease'/>
               <TeamReusable image={pen} title ='Perfectly Responsive'/>
               <TeamReusable image={icon} title='Friendly Support'/>
            </Row>
        </Container>

    </section>
  )
}

export default Team