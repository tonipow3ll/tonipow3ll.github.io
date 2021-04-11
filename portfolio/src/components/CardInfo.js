import React from 'react';
import { useSpring, animated } from 'react-spring';
function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})
    return (
       <animated.div className="" style={style}>
           <p>{props.title}</p>
           <p>{props.subtitle}</p>
           <a href={props.link} target="_blank" rel="noopener noreferrer">Deployed App</a>
           <a href={props.github} target="_blank" rel="noopener noreferrer">Code</a>
       </animated.div>
    );
}

export default CardInfo