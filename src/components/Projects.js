import { Row, Col, Tab, Nav, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proyectovalorant.jpg";
import projImg3 from "../assets/img/proyectoej.jpg";
import projImg4 from "../assets/img/proyectorick.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Valorant Vanilla JS",
            description: "Suelo jugar Valorant con amigos y decidí crear esta web con utilidades para jugadores de Valorant, creada con Html, Css, Bootstrap y Javascript.",
            imgUrl: projImg1,
            link: "https://nanoferr.github.io/ValorantJs/index.html",
        },
        {
          title: "Wiki de Rick and Morty",
          description: "Web realizada con Next.js13 y Tailwind, fetching de una API publica de la serie Rick and Morty",
          imgUrl: projImg4,
          link: "https://rickandmorty-next-alpha.vercel.app/",
      },
        {
            title: "Web de Estudio Juridico",
            description: "Pagina web para la prestación de servicios legales creada con React, Tailwind y JavaScript",
            imgUrl: projImg3,
            link: "https://estudiojuridicomm.vercel.app",
        }
    ];


    return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Proyectos</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }