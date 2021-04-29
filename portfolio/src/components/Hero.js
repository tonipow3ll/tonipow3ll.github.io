import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
// import { FaArrowDown } from 'react-icons/fa';
import { FaAngleDoubleDown } from 'react-icons/fa'

// import { animated } from 'react-spring';
// function SomeComponent() {
//   const [style, trigger] = useBoop({ y: 10 });
//   return (
//     <button onMouseEnter={trigger}>
//       Show more
//       <animated.span style={style}>
//         <Icon icon="caret-down" />
//       </animated.span>
//     </button>
//   );
// }

function Hero(props) {
    // const [style, trigger] = useBoop({ y: 10 });
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 bg-img ">
            <Container className="bg-photo">
                {/* fluid={true} */}
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                     { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                     { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                     {/* { props.text && <h3 className="lead font-weight-light">{props.text}</h3> } */}
                     { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    <a href="#projects" className="scrollArrow" smooth={true} duration={1000}> <FaAngleDoubleDown size={56} /> </a>
                    <div className="arrow bounce"> </div>
                    </Col>
                </Row>
            </Container>

        </Jumbotron>
    );
}

export default Hero;