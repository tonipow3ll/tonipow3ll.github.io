
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: `flex`,
    backgroundSize: "cover",
    backgroundColor: "#FAFAFB",
    minWidth: "100vw",
    paddingTop: `2rem`,
    maxHeight: `100vh`
  },
  main: {
    color: theme.palette.primary.main,
  },
  second: {
    color: theme.palette.secondary.main
  },
  footer: {
    display: `flex`,
  },
  skills: {
    display: `flex`,
    flexDirection: `column`
    // justifyContent: `left`,
  },
}));
const About: React.FC = (): JSX.Element => {
  const classes = useStyles()
  return (
// display={{ xs: 'block', sm: 'block', md: 'block', lg: 'block', xl: 'block' }}
    <>
      <Container className={`${classes.main} ${classes.root}`} >
        <div>
      <Typography variant="h4">About</Typography>

          Hi! Thanks for visiting my Portfolio. My name is Toni, and I am a full stack developer from Weare, NH.

          I am an adventurer, explorer, tinker-er. I enjoy creating code (of course), as well as sometimes working on small engine mechanical projects. I also enjoy hiking with my dogs and husband, and exploring NH on my four wheeler or snowmobile.

          I am a recent graduate of the University of New Hampshire's 24 week Coding Bootcamp, and I am hoping to land a new position as a Junior Software Engineer, or Junior Developer by September 2021.

          I completed my undergraduate studies in 2016, and earned my Bachelors of Fine Arts (Photography). I enjoy programming because it lets me scratch my 'creative itch', and just being able to make cool stuff on the web is.. well.. cool!

          Feel free to check out my GitHub, for the most comprehensive list of projects that I have created, am working on creating, or have contributed to. Alternatively - you can see a few of my featured projects in my project section.

          I always love to hear from other developers, feel free to shoot me a message and start a conversation! I would love to chat!

          Best,

          Toni Powell
          Developer, Discoverer, Dogmom
          Weare, NH
          tonipow3ll@gmail.com
</div>


      {/* <div className={classes.skills} >
        <Typography variant="h4" >Technical Skills</Typography>
        <Typography>Stuff goes here</Typography>
        <Typography>Stuff goes here</Typography>
        <Typography>Stuff goes here</Typography>
      </div> */}
      </Container>

    </>



  )
}

export default About
