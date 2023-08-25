import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/navbar/rene-sanger-logo.png";
import linkedin from "../assets/img/navbar/linkedin.svg";
import github from "../assets/img/navbar/github.svg";
import instagram from "../assets/img/navbar/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/renesanger/"><img src={linkedin} alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/renesanger"><img src={github} alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
