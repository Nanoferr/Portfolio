import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from "../assets/img/icon-gmail.png";
import navIcon3 from "../assets/img/logo5.png";

export const Contact = () => {
    return (
        <section className="contact">
            <Container>
                 <div className="social-icon">
                     <a href="#"><img src={navIcon1} alt="Icon" /></a>
                     <a href="#"><img src={navIcon2} alt="Icon" /></a>
                     <a href="#"><img src={navIcon3} alt="Icon" /></a>
                </div>  
            </Container>
        </section> 
    )
}