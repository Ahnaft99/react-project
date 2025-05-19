import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './header.css'
import logo from '../Header/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar  expand="lg" className="head">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link> <Link to={"/"}>Home</Link> </Nav.Link>
            <Nav.Link><Link to={"/About"}>About us</Link> </Nav.Link>
            <Nav.Link> <Link to={"/Features"}> Features</Link></Nav.Link>
            <Nav.Link ><Link to={"/Pricing"}>Pricing</Link></Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
           
          </Nav>
          <button>contact us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header