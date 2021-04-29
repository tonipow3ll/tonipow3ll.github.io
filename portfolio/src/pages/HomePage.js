import React from 'react';

import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Tech from '../components/Tech'
import About from '../components/About'
import ScrollUpButton from '../components/Scroll'
function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        
        <Carousel />

        <About />

        <Tech />

        <ScrollUpButton 
        AnimationDuration={500}
        />

        </div>
    );
}

export default HomePage