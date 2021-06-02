import React from 'react';
import { createStyles, makeStyles, Theme, Typography, Container } from '@material-ui/core';
import About from './About'
import Projects from './Projects'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        //   display: `flex`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        //   width: "100vw",
        //   justifyContent: `center`,
        paddingTop: `5rem`,
        height: `100vh`

    },
    footer: {
        //   backgroundColor: theme.palette.primary.main,
        display: `flex`,
    }

}));
const Home: React.FC = (): JSX.Element => {
    const classes = useStyles()
    return (
        <>
            <Container id="home" className={classes.root}>
                <div>
                    <Typography variant="h4">Hi, my name is Toni</Typography>
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