import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="footer-div">
              <div>
                <p><a>Inicio</a></p>
              </div>
              <div>
                <p><a>Habilidades</a></p>
              </div>
              <div>
                <p><a>Proyectos</a></p>
              </div>
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