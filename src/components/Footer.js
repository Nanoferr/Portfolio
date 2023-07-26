import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="footer-div">
              <div>
                <p><Link to="home" smooth={true} offset={50} duration={500}>Inicio</Link></p>
              </div>
              <div>
                <p><Link to="skills" smooth={true} offset={50} duration={500}>Habilidades</Link></p>
              </div>
              <div>
                <p><Link to="project" smooth={true} offset={50} duration={500}>Proyectos</Link></p>
              </div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <p>Creado por FM - 2023.</p>        
              <p>Web alojada en Github Pages.</p>  
          </Col>
        </Row>
      </Container>
    </footer>
  )
}