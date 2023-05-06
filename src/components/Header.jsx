import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


// header component
const Header = () => {

  // get user from state
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  // log out function
  const logoutHandler = () => {

    // redirect to loginPage
  navigate("/login");

    // log out
  dispatch(logout());

    // reset state
  dispatch(reset());
};

  // main container style
  const navbarStyle = {
    backgroundColor: "#011326ff",
    color: "white",
    paddingLeft: '1rem',
    paddingRight: '1rem',
  };

  // logo style
  const logo = {
    maxHeight: "100px", width: "80px",
  }

  // font color
  const white = {color: 'white'}
  
  return (
    <>
    <Navbar collapseOnSelect  style={navbarStyle}  expand="md"  variant="dark">
      <Container>

        {/* logo display */}
        <Navbar.Brand className="mw-10 ml-auto"  href="https://jakacoaching.com/">
            <img style={logo} src={require("../images/logoJakaCoaching.png")} alt="Logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
        <Navbar.Collapse className="justify-content-end " id="responsive-navbar-nav">
          <Nav >
            {/* if user display logout else sing In */}
            {user ?
              (
                <Nav.Link style={white} onClick={logoutHandler} href="/" >Log out </Nav.Link>
              ):
              <Nav.Link style={white} href="/login" >Sign In</Nav.Link>
            }
            
            <Nav.Link style={white} href="https://jakacoaching.com/pages/start-here">Home</Nav.Link>
            <Nav.Link style={white} href="/">Tools</Nav.Link>
            <Nav.Link style={white} href="https://discord.com/invite/s3yx6KykJ3">Discord</Nav.Link>
            <Nav.Link style={white} href="https://jakacoaching.com/catalog">Lessons</Nav.Link>
            <Nav.Link style={white} href="https://jakacoaching.com/pages/faq">FAQ</Nav.Link>
            <Nav.Link style={white} href="https://jakacoaching.com/pages/contact-58">Contact Us</Nav.Link>
            

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header

