import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


const HeaderNew = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logoutHandler = () => {
  dispatch(logout());
  dispatch(reset());
  navigate("/login");
};

  const navbarStyle = {
    backgroundColor: "#011326ff",
    color: "white",
    paddingLeft: '1rem',
    paddingRight: '1rem',
  };

  const logo = {
    maxHeight: "100px", width: "80px",
  }

  const white = {color: 'white'}
  
  return (
    <>
    <Navbar collapseOnSelect  style={navbarStyle}  expand="md"  variant="dark">
      <Container>
        <Navbar.Brand className="mw-10 ml-auto"  href="#home">
            <img style={logo} src={require("../images/logoJakaCoaching.png")} alt="Logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
        <Navbar.Collapse className="justify-content-end " id="responsive-navbar-nav">
          <Nav >
            {user ?
              (
                <Nav.Link style={white} onClick={logoutHandler} href="/" >Log out </Nav.Link>
              ):
              <Nav.Link style={white} href="/login" >Login </Nav.Link>
            }
            
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