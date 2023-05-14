import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/EnterPNG.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from "../assets/img/icon-gmail.png";
import navIcon3 from "../assets/img/logo5.png";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  
    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" id="brand-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Proyectos</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/fernando-maldonado-304a06181/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                  <a href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=new" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                  <a href="https://github.com/Nanoferr" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
                </div>
                <a href="#contact"><button className="vvd"><span>Conectar</span></button></a>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
  }