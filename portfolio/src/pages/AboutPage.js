import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero'

function AboutPage(props) {

    return(
       <div>
           <Hero title={props.title} />
           <Content>
               <h3>Hi</h3>
               <h4>Thanks for coming to my About Me Page!</h4>
               <p>My name is Toni. I am a full stack developer from Weare, NH. </p>
               <p>I am an adventurer, explorer, tinker-er. I enjoy creating code, as well as sometimes working on small engine mechanical projects (mostly suspension work).</p>
               {/* <p>True Crime documentaries / podcasts are my biggest guilty pleasures. I will always love working out and staying active (Yoga, Running, Weight Lifting, Hiking). </p> */}
               <p>I am currently attending the University of New Hampshire's 24 week Coding Bootcamp, and I am hoping to land a new position as a Junior Software Engineer, or Junior Developer by September 2021. </p>
               <p>I completed my undergraduate studies in 2016, and earned my Bachelors of Fine Arts (Photography). I enjoy programming because it lets me scratch my 'creative itch', and just being able to make cool stuff on the web is.. well.. cool! </p>
               <p>Feel free to check out my GitHub, for the most comprehensive list of projects that I have created, am working on creating, or have contributed to. Or feel free to check out my Projects page to see some completed projects I have done.</p>
               <p>I can be a bit of an introvert at times - but I always love to hear from other developers, feel free to shoot me a message and start a conversation! I would love to chat!</p>
       
           </Content>
       </div>
    );
}

export default AboutPage;