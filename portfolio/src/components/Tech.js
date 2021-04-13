import React from 'react';
import { Container, Row } from 'react-bootstrap';
import heroku from '../assets/images/heroku.jpg';

class Tech extends React.Component {


    render() {
        return (

            <Container fluid={true}>
            <Row className="justify-content-around pr-5 pt-5">
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
            <img className="icons" src={heroku} alt=""/>
           <p>Tech Tech Tech</p>
           <p>Tech Tech Tech</p>
            </Row>
        </Container>

        );
    }
}


export default Tech;