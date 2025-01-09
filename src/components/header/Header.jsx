import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import { Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import './style.css'

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className=''>
         <Navbar expand="lg">
         <Container fluid>
  <Navbar.Brand href="/">
    <img src={logo} alt="rocket shots" className="logo" />
  </Navbar.Brand>
  <button className="btn btn-light d-block d-md-none" onClick={handleShow}>
    <i className="bi bi-list"></i>
  </button>
  <Navbar.Collapse id="navbarScroll" className="d-none d-md-block">
    <Nav
      className="me-auto my-2 my-lg-0 justify-content-end gap-2 w-100"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about-us">About</Nav.Link>
      <NavDropdown title="Services" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/content/creation">Content Creation</NavDropdown.Item>
        <NavDropdown.Item href="/web/development">Web Development</NavDropdown.Item>
        <NavDropdown.Item href="/branding">Branding and advertising</NavDropdown.Item>
        <NavDropdown.Item href="/graphic-designing">Graphic designing</NavDropdown.Item>
        <NavDropdown.Item href="/marketing">Digital marketing</NavDropdown.Item>
        <NavDropdown.Item href="/ui-ux">UI/UX</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Gallery" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/gallery">Video Content</NavDropdown.Item>
        <NavDropdown.Item href="/social_reech">Social Media Look</NavDropdown.Item>
        <NavDropdown.Item href="/web/development">Engagement Status</NavDropdown.Item>
        <NavDropdown.Item href="/ui-ux">Stills</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact-us">Contact Us</Nav.Link>

    </Nav>
    {/* <ul className='mt-2 d-flex gap-3 p-0' type='none'>
    <li className='contact-icon1'><a href=""><i className='bi bi-instagram text-warning'></i></a></li>
    <li className='contact-icon1'><a href=""><i className='bi bi-youtube text-danger'></i></a></li>
    <li className='contact-icon1'><a href=""><i className='bi bi-whatsapp text-success'></i></a></li>
  
    </ul> */}
   
  </Navbar.Collapse>
</Container>


      <Offcanvas show={show} onHide={handleClose} className='dark2'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={logo} alt="rocket shots" className="logo" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href="/">Home</a></li>
            <div className="line"></div>
            <li><a href="/about-us">About us</a></li>
            <div className="line"></div>
            {/* <li><a href="/">Contact us</a></li> */}
            <li className='fs-4'>Services</li>
            <li><a href="/content/creation">Content Creation</a></li>
            <li><a href="/web/development">Web Development</a></li>
            <li><a href="/branding">Branding and advertising</a></li>
            <li><a href="/graphic-designing">Graphic Designing</a></li>
            <li><a href="/marketing">Digital Marketing</a></li>
            <li><a href="/ui-ux">UI UX</a></li>
            <div className="line"></div>
            <li><a href="/contact-us">Contact us</a></li>
            <div className="line"></div>
            <li><a href="/gallery">Gallery</a></li>
          </ul>

          <div className="line"></div>
          <p className='text-aqua fs-4'>Follow us on</p>
          <ul className='mt-2 d-flex gap-3 p-0' type='none'>
          <li className='contact-icon1'><a href=""><i className='bi bi-instagram text-warning'></i></a></li>
          <li className='contact-icon1'><a href=""><i className='bi bi-youtube text-danger'></i></a></li>
          <li className='contact-icon1'><a href=""><i className='bi bi-whatsapp text-success'></i></a></li>
  
    </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>

    </header>
  )
}

export default Header