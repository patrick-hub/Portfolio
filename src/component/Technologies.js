import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import jsIcon from "../assets/img/javascript.081325c6.svg";
import typescriptIcon from "../assets/img/typescript.svg"
import htmlIcon from "../assets/img/html5.c1bb84e0.svg";
import gitIcon from "../assets/img/git.43d387b7.svg";
import reactIcon from "../assets/img/react.e7574af2.svg";
import css3Icon from "../assets/img/css3.3ec32022.svg";
import webflowIcon from "../assets/img/webflow-svgrepo-com.svg";
import nextjsIcon from "../assets/img/nextjs-icon-svgrepo-com.svg";
import slackIcon from "../assets/img/slack-icon-svgrepo-com.svg"


export const Technologies = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technology Stacks</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmlIcon} alt="html-icon" />
                            </div>
                            <div className="item">
                                <img src={css3Icon} alt="css-icon" />
                            </div>
                            <div className="item">
                                <img src={jsIcon} alt="js-icon" />
                            </div>
                            <div className="item">
                                <img src={typescriptIcon} alt="type-icon" />
                            </div>
                            <div className="item">
                                <img src={reactIcon} alt="react-icon" />
                            </div>
                            <div className="item">
                                <img src={nextjsIcon} alt="next-icon" />
                            </div>
                            <div className="item">
                                <img src={gitIcon} alt="git-icon" />
                            </div>
                            <div className="item">
                                <img src={slackIcon} alt="slack-icon" />
                            </div>
                            <div className="item">
                                <img src={webflowIcon} alt="webflow-icon" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}