import React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

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
const Projects: React.FC = (): JSX.Element => { 
    const classes = useStyles()
    return(
        <div className={classes.root}>
           <Typography variant="h3">
           Project page working!
               </Typography> 
        </div>
    )
}

export default Projects