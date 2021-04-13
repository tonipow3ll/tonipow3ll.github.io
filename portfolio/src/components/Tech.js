import React from 'react';
import { Container, Row } from 'react-bootstrap';

class Tech extends React.Component {


    render() {
        return (

            <Container fluid={true}>
            <Row className="justify-content-around pr-5 pt-5">
            {/* <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/> */}
           <p>Tech Tech Tech</p>
           <p>Tech Tech Tech</p>
            </Row>
        </Container>

        );
    }
}


export default Tech;