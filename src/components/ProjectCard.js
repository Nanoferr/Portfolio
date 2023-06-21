import { Col, ListGroupItem } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, link }) => {

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <h4 className="pt-3">{title}</h4>
                <span>{description}</span>
                <a href={link} target="_blank"><p className="pt-3">Ver Deploy</p></a>
            </div>
        </Col>
    )
}

