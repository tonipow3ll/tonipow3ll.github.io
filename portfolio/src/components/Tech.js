import React from 'react';
import { Container, Row } from 'react-bootstrap';
import heroku from '../assets/images/heroku.jpg';
import mongo from '../assets/images/mongo.jpg';
import node from '../assets/images/node.jpg';
import react from '../assets/images/react.jpg';
import sequelize from '../assets/images/Sequelize.png';
import git from '../assets/images/git.jpg';

class Tech extends React.Component {


    render() {
        return (

            <Container fluid={true}>
                {/* <p>Tech Stacks I'm Familiar in</p> */}
            <Row className="justify-content-around pr-5 pt-5">
            <img className="icons" src={git} alt=""/>
            <img className="icons" src={node} alt=""/>
            <img className="icons" src={mongo} alt=""/>
            <img className="icons" src={react} alt=""/>
            <img className="icons" src={sequelize} alt=""/>
            <img className="icons" src={heroku} alt=""/>

            </Row>
        </Container>

        );
    }
}


export default Tech;