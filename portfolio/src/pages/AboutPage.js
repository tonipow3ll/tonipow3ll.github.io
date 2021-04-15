import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import { FaFile } from 'react-icons/fa';
import { FaEnvelopeOpen } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import resume from '../assets/TPResume.pdf'

// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

function AboutPage(props) {

    return(
       <div>
           <Hero title={props.title} />
        
           <Content >
               <h3>Hi</h3>
               <h4>Thanks for coming to my About Me Page!</h4>
               <p>My name is Toni. I am a full stack developer from Weare, NH. </p>
               <p>I am an adventurer, explorer, tinker-er. I enjoy creating code (of course), as well as sometimes working on small engine mechanical projects (mostly suspension work), hiking with my dogs and husband, and exploring NH on my four wheeler or snowmobile. </p>
               <p>On rainy or lazy days I enjoy watching true crime documentaries, or horror / comedy movies (Tucker and Dale vs Evil is a great example of a horror comedy mash up - would recommend)</p>
               <p>I am currently attending the University of New Hampshire's 24 week Coding Bootcamp, and I am hoping to land a new position as a Junior Software Engineer, or Junior Developer by September 2021. </p>
               <p>I completed my undergraduate studies in 2016, and earned my Bachelors of Fine Arts (Photography). I enjoy programming because it lets me scratch my 'creative itch', and just being able to make cool stuff on the web is.. well.. cool! </p>
               <p>Feel free to check out my GitHub, for the most comprehensive list of projects that I have created, am working on creating, or have contributed to. Or feel free to check out my Projects page to see some completed projects I have done.</p>
               <p>I can be a bit of an introvert at times - but I always love to hear from other developers, feel free to shoot me a message and start a conversation! I would love to chat!</p>
       
                <p>Best,</p>        
            <h3></h3>
            <h3>Toni Powell</h3>
            <p>  
            Developer, Discoverer, Dogmom
            <br></br>
            Weare, NH
            <br></br>
            <a className="footer-link" href={resume} target="_blank"> Resume <FaFile /> </a> 
          {/* <a href="https://docs.google.com/document/d/1hUfMsc9cZZ9qv7OElRUVu81KRxQAweR11xBAiz81edE/edit?usp=sharing" target="_blank"> Resume <FaFile /> </a>  */}
            <br></br>
            <a className="footer-link" href="mailto:tonipow3ll@gmail.com">Email <FaEnvelopeOpen /> </a> 
            <br></br>
            <a className="footer-link" href="https://github.com/tonipow3ll" target="_blank">  Github <FaGithub /> </a> 
            <br></br>
            <a className="footer-link" href="https://linkedin.com/in/tonipowell13" target="_blank">  LinkedIn <FaLinkedinIn /> </a> 
            </p>
           </Content>
           
       </div>
    );
}

export default AboutPage;