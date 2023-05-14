import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/EnterPNG.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icon-gmail.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/fernando-maldonado-304a06181/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=new" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved. Created by FM</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}