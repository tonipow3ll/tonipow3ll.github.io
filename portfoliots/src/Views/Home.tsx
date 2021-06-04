import React from 'react';
import { createStyles, makeStyles, Theme, Typography, Container } from '@material-ui/core';
import About from './About'
import Projects from './Projects'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
          display: `flex`,
          backgroundSize: "cover",
          backgroundColor: "#000",
          minWidth: "100vw",
          paddingTop: `5rem`,
          height: `100vh`
    },
    main: {
        color: theme.palette.primary.main,
    },
    second: {
        color: theme.palette.secondary.main
    },
    footer: {
        display: `flex`,
    }

}));
const Home: React.FC = (): JSX.Element => {
    const classes = useStyles()
    return (
        <>
            <Container disableGutters={true} id="home" className={classes.root}>
                <div>
                    <Typography className={classes.main}variant="h4">Hi, I'm <Typography className={classes.second} variant="h4" display="inline">Toni</Typography></Typography>
                    <Typography className={classes.main} variant="h4">Developer from Weare, NH</Typography>
                </div>
            </Container>
            <Container id="about" className={classes.root}>
                <About />
            </Container>

            <Container id="projects" className={classes.root}>
                <Projects />
            </Container>
        </>
    )
}

export default Home