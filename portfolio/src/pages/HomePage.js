import React from 'react';

import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Tech from '../components/Tech'
import About from '../components/About'
function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        
        <Carousel />

        <About />

        <Tech />

        </div>
    );
}

export default HomePage