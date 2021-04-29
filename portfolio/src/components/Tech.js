import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaBootstrap, FaKey, FaServer, FaDatabase, FaJsSquare, FaCss3Alt, FaHtml5, FaCode, FaNodeJs, FaCodeBranch, FaObjectUngroup, FaAngular } from 'react-icons/fa';

class Tech extends React.Component {

    render() {
        return (

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
                <Row className="justify-content-center text-center">
                    <Col >
                        <h1>Learning</h1>
                        <ul>
                            <li> <FaJsSquare />TypeScript</li>
                            <li> <FaAngular />Angular</li>
                            <li> <FaKey />Authentication (JWT)</li>

                        </ul>
                    </Col>
                </Row>


            </Container>

        );
    }
}


export default Tech;