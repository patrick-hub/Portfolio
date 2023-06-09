import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import twitterLogo from '../assets/img/twitter-2170.svg'



export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState('false')


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
      <Container className="py-3">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedLink('skills') }>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedLink('projects')}>Projects</Nav.Link>
          </Nav>

          <span className="navbar-text ">
              <div className="social-icon g-4">
                <a href="https://www.linkedin.com/in/patrick-akuagwu"><img src={navIcon1} alt="" /></a>
                <a href="https://twitter.com/PAkuagwu"><img src={twitterLogo}  alt="" className="twitter-logo"/></a>
                <a href="#"><img src={navIcon3}  alt="" /></a>
              </div>
              <button className="connect-button"><a href="https://wa.me/+2348179169550">Let's Connect</a></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
