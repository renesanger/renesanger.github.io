import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import barterplace from "../assets/img/projects/barterplace.png";
import bankingSystem from "../assets/img/projects/banking-system.png";
import monopoly from "../assets/img/projects/monopoly.png";
import clima from "../assets/img/projects/clima.png";
import tipsy from "../assets/img/projects/tipsy.png";
import quizzler from "../assets/img/projects/quizzler.png";
import bmiCalculator from "../assets/img/projects/bmi-calculator.png";
import destiny from "../assets/img/projects/destiny.png";
import eggTimer from "../assets/img/projects/egg-timer.png";
import ghostbusterTrap from "../assets/img/projects/ghostbuster.jpeg";
import bones from "../assets/img/projects/bones.jpeg";
import bouncingBall from "../assets/img/projects/bouncingball.jpeg";


export const Projects = () => {

    const webapps = [
        {
            title: "Barterplace",
            description: "A responsive online marketplace using React.js, facilitating seamless goods trading through a bartering system. ",
            imgUrl: barterplace,

        },
        {
            title: "Banking System",
            description: "Simulation of a real-world bank account meticulously tracking transactions, account balances, and financial history",
            imgUrl: bankingSystem,

        },
        {
            title: "Monopoly",
            description: "Original take on a classic board game made virtually accessible with the use of React.js",
            imgUrl: monopoly,

        }
    ]

    const iosApps = [
        {
            title: "Quizzler",
            description: "A quiz with an efficient and smooth user interface that notifies the user when an answer is guessed correctly or incorrectly",
            imgUrl: quizzler,
            isIos: true,

        },
        {
            title: "Destiny",
            description: "Choose your own destiny game app, different choices results in alternative endings",
            imgUrl: destiny,
            isIos: true,
        },
        {
            title: "Clima",
            description: "Weather application that gives your temperature and weather forcast based on your geolocation",
            imgUrl: clima,
            isIos: true,
        },
        
        
        {
            title: "Tipsy",
            description: "Program to split the bill evenly among friends based on total, amout of friends, tax, and tip",
            imgUrl: tipsy,
            isIos: true,
        },
        {
            title: "BMI Calculator",
            description: "An app that calculates your BMI given your height and wieght",
            imgUrl: bmiCalculator,
            isIos: true,

        },
        {
            title: "Egg Timer",
            description: "Application that sets a timer depending how hard or soft you like your eggs",
            imgUrl: eggTimer,
            isIos: true,
        }
    ]

    const mayaModels = [
        {
            title: "Ghostbuster Trap",
            description: "3D model of a ghostbuster trap",
            imgUrl: ghostbusterTrap,

        },
        {
            title: "Bones",
            description: "3D model and animation of bones inspired by the Disney movie Coco",
            imgUrl: bones,

        },
        {
            title: "Bouncing Ball",
            description: "Traditional and classic animation of a bouncing ball",
            imgUrl: bouncingBall,

        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        
                        <h2>Projects</h2>
                        {/* <Col  sm={12} md={6} xl={7}> */}
                        <p>
                            This is a collection of projects and work that I've done and I am able to demo. I am proud of each project some big and small, but each project contributed to my personal growth as a developer.
                            I have project experience in multipe languages such as JavaScript, C#, C++, Python and have built many programs from websites to games and machine learning scripts. Along with this, I have experience in mobile development with iOS swift and 3D modeling and animation with the program Maya.
                        </p>{/* </Col> */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Mobile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">3D</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            webapps.map((project, index)=> {
                                                return (<ProjectCard 
                                                    key={index}
                                                    {...project}     
                                                />)
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            iosApps.map((project, index)=> {
                                                return (<ProjectCard 
                                                    key={index}
                                                    {...project}     
                                                />)
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            mayaModels.map((project, index)=> {
                                                return (<ProjectCard 
                                                    key={index}
                                                    {...project}     
                                                />)
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}/> */}
        </section>)
}