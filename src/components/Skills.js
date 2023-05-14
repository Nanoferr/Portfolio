import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/logo1.png";
import meter2 from "../assets/img/logo2.png";
import meter3 from "../assets/img/logo3.png";
import meter4 from "../assets/img/logo4.png";
import meter5 from "../assets/img/logo5.png";
import meter6 from "../assets/img/logo6.png";



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Habilidades</h2>
                            <p>Tecnologias utilizadas hasta el momento. Me encuentro en constante aprendizaje de nuevos lenguajes.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>HTML</h5>
                                    <div className="item-bar">
                                        <div className="progress" style={{width: "85%"}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>CSS</h5>
                                    <div className="item-bar">
                                        <div className="progress" style={{width: "75%"}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Javascript</h5>
                                    <div className="item-bar">
                                        <div className="progress" style={{width: "60%"}}></div>
                                    </div>
                                </div>          
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Bootstrap</h5>
                                    <div className="item-bar">
                                        <div className="progress" style={{width: "70%"}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image" />
                                    <h5>Github</h5>
                                    <div className="item-bar">
                                        <div className="progress" style={{width: "65%"}}></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="Image" />
                                    <h5>React</h5>
                                    <div className="item-bar">
                                        <div className="progress" style={{width: "45%"}}></div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
    }