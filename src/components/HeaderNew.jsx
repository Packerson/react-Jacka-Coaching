import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const HeaderNew = () => {
  return (
    <>

<Navbar className="NCBOX" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img src={require("../images/logoJakaCoaching.png")} alt="Logo" />
        </Navbar.Brand>

        
        
          <Nav className="me-auto">
            
            
          </Nav>
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Tools">Tools</Nav.Link>
            <Nav.Link href="#Discord">Discord</Nav.Link>
            <Nav.Link href="#Lessons">Lessons</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
            <Nav.Link href="#Sign In">Sign In</Nav.Link>
          </Nav>
       
      </Container>
    </Navbar>

    </>
  )
}

export default HeaderNew
{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
{/* <Navbar.Collapse id="responsive-navbar-nav">
</Navbar.Collapse> */}