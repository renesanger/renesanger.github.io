import { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from '../assets/img/navbar/rene-sanger-logo.png'
import linkedin from '../assets/img/navbar/linkedin.svg'
import github from '../assets/img/navbar/github.svg'
import instagram from '../assets/img/navbar/instagram.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }}
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
            <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/renesanger/"><img src={linkedin} alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/renesanger"><img src={github} alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={()=> {console.log('connect');window.location.href='#connect';}} href="connect"><span>Let's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}