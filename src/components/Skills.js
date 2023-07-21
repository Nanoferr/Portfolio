import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/logo1.png";
import meter2 from "../assets/img/logo2.png";
import meter3 from "../assets/img/logo3.png";
import meter4 from "../assets/img/logo4.png";
import meter5 from "../assets/img/logo5.png";
import meter6 from "../assets/img/logo6b.svg";
import meter7 from "../assets/img/tailwind.png"



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
                            <h2 className="p-5">Habilidades</h2>                         
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="" />
                                    <h5>HTML</h5>                                 
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="" />
                                    <h5>Javascript</h5>
                                </div>          
                                <div className="item">
                                    <img src={meter4} alt="" />
                                    <h5>React</h5>                                   
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="" />
                                    <h5>Github</h5>                           
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="" />
                                    <h5>Bootstrap</h5>                                 
                                </div>
                                <div className="item">
                                    <img src={meter7} alt="" />
                                    <h5>Tailwind</h5>                                
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
    }