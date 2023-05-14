import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from "../assets/img/icon-gmail.png";


export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Col>
                <Row>
                 <div>
                    <h2>
                        Contactame
                    </h2>
                 </div>
                 <div class="contact-items">
                    <div className="contact-mail">
                                <p className="contact-mail">f.mmaldonado27@gmail.com <div className="social-icon">
                                <a href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=new" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
                                </div></p>
                            </div>                                                
                    </div> 
                </Row>  
            </Col>
            </Container>
        </section> 
    )
}