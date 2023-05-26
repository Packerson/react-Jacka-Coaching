import React from "react";
import {Col, Container, Row} from 'react-bootstrap'

// Footer Component
const Footer = () => {

    // style for main Container
    const FooterBox = {
        backgroundColor: "#011326ff",         
        width: "100%",
        height: "80px",
        color: "white",
        paddingLeft: '1rem',
        paddingRight: '1rem',
          }
    
    //   style for logo
    const logo = {
        maxHeight: "100px", width: "80px",
        }

  return (
    <footer style={FooterBox} className="Footer">
        <Container className= "">
            <Row className="mt-0 mb-0">
                <Col className="mw-10 ml-auto mx-auto mt-auto" >
                    <a href="https://jakacoaching.com/"><img style={logo} src={require("../images/logoJakaCoaching.png")} alt="Logo" /></a>
                    
                </Col>

                <Col className="d-flex justify-content-end mr-0">
                    <a className="p-1" href="https://www.facebook.com/farazjaka">Facebook</a>
                    <a className="p-1" href="https://twitter.com/farazjaka">Twitter</a>
                    <a className="p-1" href="https://www.instagram.com/farazjaka/">Instagram</a>
                    <a className="p-1" href="https://www.youtube.com/farazjakapoker">Youtube</a> 
                </Col>
            </Row>
        </Container>

    </footer>
  )
}

export default Footer