import React from "react";
import {Col, Container, Row} from 'react-bootstrap'

// Footer Component
const FooterNew = () => {

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
    <footer style={FooterBox} className="fixed-bottom ">
        <Container className= "">
            <Row className="mt-2 mb-2">
                <Col className="mw-10 ml-auto mx-auto mt-auto" >
                    <img style={logo} src={require("../images/logoJakaCoaching.png")} alt="Logo" />
                </Col>

                <Col className="d-flex justify-content-end mr-0">
                    <a className="p-3" href="https://www.facebook.com">Facebook</a>
                    <a className="p-3" href="https://www.Twitter.com">Twitter</a>
                    <a className="p-3" href="https://www.Instagram.com">Instagram</a>
                    <a className="p-3" href="https://www.Youtube.com">Youtube</a> 
                </Col>
            </Row>
        </Container>

    </footer>
  )
}

export default FooterNew