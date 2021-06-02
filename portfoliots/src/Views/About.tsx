
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
    //   display: `flex`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   width: "100vw",
    //   justifyContent: `center`,
      paddingTop: `5rem`
  
    },
    footer: {
    //   backgroundColor: theme.palette.primary.main,
      display: `flex`,
    }
  }));
const About: React.FC = (): JSX.Element => { 
    const classes = useStyles()
    return(
   
         <>
        <div className={classes.root}>
           <p>
           My name is Toni. I am a full stack developer from Weare, NH.

I am an adventurer, explorer, tinker-er. I enjoy creating code (of course), as well as sometimes working on small engine mechanical projects. I also enjoy hiking with my dogs and husband, and exploring NH on my four wheeler or snowmobile.

I am currently attending the University of New Hampshire's 24 week Coding Bootcamp, and I am hoping to land a new position as a Junior Software Engineer, or Junior Developer by September 2021.

I completed my undergraduate studies in 2016, and earned my Bachelors of Fine Arts (Photography). I enjoy programming because it lets me scratch my 'creative itch', and just being able to make cool stuff on the web is.. well.. cool!

Feel free to check out my GitHub, for the most comprehensive list of projects that I have created, am working on creating, or have contributed to. Alternatively - you can see a few of my featured projects in my project section.

I always love to hear from other developers, feel free to shoot me a message and start a conversation! I would love to chat!

Best,

Toni Powell
Developer, Discoverer, Dogmom
Weare, NH
tonipow3ll@gmail.com
               </p>
        </div>
        </>
   

   
    )
}

export default About
