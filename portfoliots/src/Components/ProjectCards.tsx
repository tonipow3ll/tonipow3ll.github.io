import React from 'react';
import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

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
  const ProjectCards: React.FC = (): JSX.Element => {
    const classes = useStyles()
    return (
        <div className={classes.main}>

            Project cards will go here

            </div>
    )
  }

  export default ProjectCards