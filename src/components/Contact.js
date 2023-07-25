import { Col, Container, Row } from "react-bootstrap";

import { ContactForm } from "./ContactForm";

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
                    <div>
                    <ContactForm/>
                    </div>
                 </div>
                </Row>  
            </Col>
            </Container>
        </section> 
    )
}


/* <div class="contact-items">
<div className="contact-mail">                
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/fernando-maldonado-304a06181/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
            <a href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=new" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
            <a href="https://github.com/Nanoferr" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
        </div>                                                
</div> */