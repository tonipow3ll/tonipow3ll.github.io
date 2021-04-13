import React from 'react';

import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Tech from '../components/Tech'
function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        
        <Carousel />

        <Tech />

        </div>
    );
}

export default HomePage