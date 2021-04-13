import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Github from '../assets/images/github.png'
import LinkedIn from '../assets/images/linkedin.png'


function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                    {/* <a href="">{Github}</a> */}
                    {/* <a href="https://www.linkedin.com/in/tonipowell13" target="_blank"><img className="footer-icons" src={LinkedIn}  alt="linkedin icon."/></a> */}
                    {/* <a href="https://www.linkedin.com/in/tonipowell13" target="_blank"><img className="footer-icons" src={Github}  alt="linkedin icon."/></a> */}
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3} >
                    Made with 🖤 
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;