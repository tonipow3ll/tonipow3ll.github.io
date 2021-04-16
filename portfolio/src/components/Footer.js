import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFile } from 'react-icons/fa';
import { FaEnvelopeOpen } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import resume from '../assets/TPResume.pdf'


function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>

                        <a className="footer-link" href={resume} target="_blank"> <FaFile size={28} /> </a> 
                        <a className="footer-link" href="mailto:tonipow3ll@gmail.com" ><FaEnvelopeOpen size={28} />  </a>
                        <a className="footer-link"  href="https://github.com/tonipow3ll" target="_blank"><FaGithub size={28} />  </a>
                        <a className="footer-link" href="https://linkedin.com/in/tonipowell13" target="_blank"><FaLinkedinIn size={28} />  </a>
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