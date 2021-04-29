import React from 'react';
// import Hero from './Hero';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaBootstrap, FaKey, FaServer, FaDatabase, FaJsSquare, FaCss3Alt, FaHtml5, FaCode, FaNodeJs, FaCodeBranch, FaObjectUngroup, FaAngular } from 'react-icons/fa';

// import React from 'react';
// import Content from '../components/Content';
// import Hero from '../components/Hero';
// import { FaFile } from 'react-icons/fa';
// import { FaEnvelopeOpen } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';
// import { FaLinkedinIn } from 'react-icons/fa';
// import resume from '../assets/TPResume.pdf'

// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

function AboutPage(props) {

    return (
        <div>
            {/* <Hero title={props.title} /> */}
                {/* className="about-img" */}
            <Jumbotron className=" bg-transparent about-img jumbotron-fluid">
                {/* className="about-photo" */}
                <Container className="about-photo">
                    <Row className="justify-content-center">
                        <Col md={8} sm={12}>

                            <h3 id="about">About Me</h3>
                            <p>My name is Toni. I am a full stack developer from Weare, NH. </p>
                            <p>I am an adventurer, explorer, tinker-er. I enjoy creating code (of course), as well as sometimes working on small engine mechanical projects. I also enjoy hiking with my dogs and husband, and exploring NH on my four wheeler or snowmobile. </p>
                            <p>I am currently attending the University of New Hampshire's 24 week Coding Bootcamp, and I am hoping to land a new position as a Junior Software Engineer, or Junior Developer by September 2021. </p>
                            <p>I completed my undergraduate studies in 2016, and earned my Bachelors of Fine Arts (Photography). I enjoy programming because it lets me scratch my 'creative itch', and just being able to make cool stuff on the web is.. well.. cool! </p>
                            <p>Feel free to check out my GitHub, for the most comprehensive list of projects that I have created, am working on creating, or have contributed to. Or feel free to check out my Projects page to see some completed projects I have done.</p>
                            <p> I always love to hear from other developers, feel free to shoot me a message and start a conversation! I would love to chat!</p>

                            <p>Best,</p>
                            <h3></h3>
                            <h3>Toni Powell</h3>
                            <p>
                                Developer, Discoverer, Dogmom
                                    <br></br>
                                    Weare, NH
                                    <br></br>
                                <a className="footer-link projects" href="mailto:tonipow3ll@gmail.com">tonipow3ll@gmail.com </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Container fluid={true}>
                <Row className="justify-content-center text-center">
                    <Col >
                        <h1>Skills</h1>
                        <ul>
                            <li> <FaNodeJs />Node.js</li>
                            <li> <FaDatabase />MySql</li>
                            <li> <FaObjectUngroup />NoSql(Mongo)</li>
                            <li> <FaJsSquare />Javascript</li>
                            <li> <FaCss3Alt />CSS</li>
                            <li> <FaHtml5 /> HTML5</li>
                            <li> <FaKey />Passport</li>
                            <li> <FaDatabase />Sequelize</li>
                            <li> <FaCodeBranch />Mongoose</li>
                            <li> <FaServer />Express</li>
                            {/* <li> <FaCamera />Adobe Photoshop / Adobe Lightroom</li> */}
                        </ul>
                    </Col>

                    <Col >
                        <h1>Frameworks</h1>
                        <ul>
                            <li><FaReact />React</li>
                            <li> <FaBootstrap />Bootstrap</li>
                            <li> <FaCode />Bulma</li>
                            <li> <FaCode />Materialize</li>
                        </ul>
                    </Col>

                </Row>
                {/* <Row className="justify-content-center text-center">
                    <Col >
                        <h1>Learning</h1>
                        <ul>
                            <li> <FaJsSquare />TypeScript</li>
                            <li> <FaAngular />Angular</li>
                            <li> <FaKey />Authentication (JWT)</li>

                        </ul>
                    </Col>
                </Row> */}


            </Container>

        </div>
    );
}

export default AboutPage;

