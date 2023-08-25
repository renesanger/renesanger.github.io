import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/airballoon.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])
    
    const tick = () => {
        let i = loopNum% toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)
        } 
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }
        
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} md={6} xl={7}>
                        <span className="tagline">Welcome To My Portfolio</span>
                        <h1>{`Hello, I'm Rene Sanger`}
                        <br/>
                        <span className="wrap">software engineer</span></h1>
                        {/* <span className="wrap">Software Engineer {text}</span></h1> */}
                        <p>
                            <span>
                            I am a software engineer and aspiring mobile developer based in Brooklyn, New York. I enjoy learning languages and frameworks like React and React Native, as well as Swift for mobile development. I am most interested in building beautiful and functional applications that help people automate everyday life from scheduling apps to apps that manage your finances.
                            </span>
                            <br/>
                            <br/>
                            <span>
                            I have worked as a full-stack developer using Microsoft technologies such as C#, .Net, Microsoft SQL Server, and Azure for large enterprise companies in the transportation and insurance sector.
                            </span>
                            <br/>
                            <br/>
                            <span>
                            I am an overall creative person that values visuals and smooth and efficient functionality. I am currently familiarizing myself with Autodesk Maya (3D Animation Software) and I am also highly interested in photography and music performance.
                            </span>
                        </p>
                        <button onClick={() => {console.log('connect');window.location.href='#connect';}}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col sm={7} md={6} xl={4}>
                        <img src={headerImg} width="100px" height="100px" alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        
        </section>
    )
}