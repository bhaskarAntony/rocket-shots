import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import { Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import './style.css'

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className='dark-2'>
         <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="rocket shots" className="logo" /></Navbar.Brand>
        {/* <Navbar.Toggle/> */}
        <button className="btn btn-light d-block d-md-none"  onClick={handleShow}><i class="bi bi-list"></i></button>
        <Navbar.Collapse id="navbarScroll" className='d-none d-md-block'>
          <Nav
            className="me-auto my-2 my-lg-0j"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/content/creation">
               Content Creation
              </NavDropdown.Item>
              <NavDropdown.Item href="/web/development">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/branding">Branding and advertising</NavDropdown.Item>
              <NavDropdown.Item href="/graphic-designing">Graphic designing</NavDropdown.Item>
              <NavDropdown.Item href="/marketing">Digital marketing</NavDropdown.Item>
              <NavDropdown.Item href="/ui-ux">UI/UX</NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form className="d-flex">
            <button className='btn btn-light rounded-0'>Contact us</button>
          </Form>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={show} onHide={handleClose} className='dark2'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={logo} alt="rocket shots" className="logo" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            {/* <li><a href="/">Contact us</a></li> */}
            <li>Servicess</li>
            <li><a href="/content/creation">Content Creation</a></li>
            <li><a href="/web/development">Web Development</a></li>
            <li><a href="/branding">Branding and advertising</a></li>
            <li><a href="/graphic-designing">Graphic Designing</a></li>
            <li><a href="/marketing">Digital Marketing</a></li>
            <li><a href="/ui-ux">UI UX</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>

    </header>
  )
}

export default Header