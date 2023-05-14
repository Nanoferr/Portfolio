import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/EnterPNG.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/logo5.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/fernando-maldonado-304a06181/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>                  
                  <a href="https://github.com/Nanoferr" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
                </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">            
              <p>Todos los derechos reservados. Creado por FM - 2023.</p>
              <p>Web alojada en Github Pages.</p>  
          </Col>
        </Row>
      </Container>
    </footer>
  )
}