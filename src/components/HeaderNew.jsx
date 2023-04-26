import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const HeaderNew = () => {
  const navbarStyle = {
    backgroundColor: "#011326ff",
    color: "white",
    position: 'relative',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  };
  const logo = {
    maxHeight: "100px", width: "80px",
    display: 'flex',
  }
  const white = {color: 'white'}
  
  return (
    <>
    <Navbar collapseOnSelect style={navbarStyle} expand="md"  variant="dark">
      <Container >
        <Navbar.Brand className="mw-100"  href="#home">
            <img style={logo} src={require("../images/logoJakaCoaching.png")} alt="Logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={white} href="#Home">Home</Nav.Link>
            <Nav.Link style={white} href="#Tools">Tools</Nav.Link>
            <Nav.Link style={white} href="#Discord">Discord</Nav.Link>
            <Nav.Link style={white} href="#Lessons">Lessons</Nav.Link>
            <Nav.Link style={white} href="#FAQ">FAQ</Nav.Link>
            <Nav.Link style={white} href="#Contact Us">Contact Us</Nav.Link>
            <Nav.Link style={white} href="#Sign In">Sign In</Nav.Link>
           
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default HeaderNew



{/* <Navbar className="NCBOX" collapseOnSelect expand="md"  style={navbarStyle}>
      <Container style={white}>
        <Navbar.Brand href="#home">
            <img src={require("../images/logoJakaCoaching.png")} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
              <Nav.Link style={white} href="#Home">Home</Nav.Link>
              <Nav.Link style={white} href="#Tools">Tools</Nav.Link>
              <Nav.Link style={white} href="#Discord">Discord</Nav.Link>
              <Nav.Link style={white} href="#Lessons">Lessons</Nav.Link>
              <Nav.Link style={white} href="#FAQ">FAQ</Nav.Link>
              <Nav.Link style={white} href="#Contact Us">Contact Us</Nav.Link>
              <Nav.Link style={white} href="#Sign In">Sign In</Nav.Link>
           
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar> */}