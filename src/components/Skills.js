import { Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import colorSharp from "../assets/img/color-sharp.png";

import javascript from "../assets/img/carousel/javascript.svg";
import react from "../assets/img/carousel/react.svg";
import csharp from "../assets/img/carousel/csharp.svg";
import swift from "../assets/img/carousel/swift.svg";
import html from "../assets/img/carousel/html.svg";

import dotnet from "../assets/img/carousel/dotnet.svg";
import css from "../assets/img/carousel/css.svg";
import python from "../assets/img/carousel/python.svg";
import mongodb from "../assets/img/carousel/mongodb.svg";
import cpp from "../assets/img/carousel/cpp.svg";

import maya from "../assets/img/carousel/maya.svg";
import nodejs from "../assets/img/carousel/nodejs.svg";
import azure from "../assets/img/carousel/azure.svg";
import mysql from "../assets/img/carousel/mysql.svg";
import git from "../assets/img/carousel/git.svg";




export const Skills = () => {
    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  }
};

return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
I am a creative thinker that can work through different complex problems and provide innovative solutions. I am a competent leader whenever I see a clear vision and have my goals aligned I 
always find a way to complete the task at hand. I like to learn as much as I can from any environment and my thirst for knowledge translates to the work I create. Although critical thinking is 
a key skill of mine, I am also skilled in various technologies and tools that are needed to be proficient in web development, mobile development, software engineering, and 3D modeling. Please scroll the carousel to see a detailed view of my tools and technologies.

                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={javascript} alt="javascript" />
                            </div>
                            <div className="item">
                                <img src={react} alt="react" />
                            </div>
                            <div className="item">
                                <img src={csharp} alt="csharp" />
                            </div>
                            <div className="item">
                                <img src={swift} alt="swift" />
                            </div>
                            <div className="item">
                                <img src={html} alt="html" />
                            </div>
                            <div className="item">
                                <img src={css} alt="css" />
                            </div>
                            <div className="item">
                                <img src={dotnet} alt="dotnet" />
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="mongdb" />
                            </div>
                            <div className="item">
                                <img src={python} alt="python" />
                            </div>
                            <div className="item">
                                <img src={cpp} alt="cpp" />
                            </div>
                            <div className="item">
                                <img src={maya} alt="maya" />
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="nodejs" />
                            </div>
                            <div className="item">
                                <img src={azure} alt="azure" />
                            </div>
                            <div className="item">
                                <img src={mysql} alt="mysql" />
                            </div>
                            <div className="item">
                                <img src={git} alt="git" />
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        {/* <img className="background-image-left" src={colorSharp} /> */}

    </section>
)

}