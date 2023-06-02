import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState('falsae')


   useEffect(() => {

    const onScroll = () => {
        if (window.scrollY >  50) {
            setScrolled('true')
        } else {
            setScrolled('false')
        }
    }

    window.addEventListener("scroll", onScroll)

    window.removeEventListener("scroll", onScroll)

   }, [])

   const onUpdatedLink = (value) => {
    setActiveLink(value)
   }


   return (
    <Navbar expand="lg" text-light className={scrolled ? "scrolled" : "" } >
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedLink('skills') }>Skills</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedLink('projects')}>Projects</Nav.Link>
          </Nav>

          <span className="navbar-text">
              <div className="social-icon d-flex g-4">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2}  alt="" /></a>
                <a href="#"><img src={navIcon3}  alt="" /></a>
              </div>
              <button className="connect-button" onClick={() => {}}><span>Let's Connect</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
