import React from 'react';
import { createStyles, makeStyles, Theme, Typography, Container } from '@material-ui/core';

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
    return(
        <>
        <Container className={classes.root}>
            <div>
                <Typography variant="h4">Hi, my name is Toni</Typography>
            </div>
        </Container>
        <Container className={classes.root}>
           <Typography variant="h4">Featured Projects</Typography> 
           <div>
               <Typography>Please see a few of my featured projects below. For a comprehensive list of my projects - please see my projects page, or check out my Github.</Typography>
           </div>
        </Container>
        </>
    )
}

export default Home