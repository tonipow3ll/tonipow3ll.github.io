import React from 'react';
import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import ProjectCards from '../Components/ProjectCards'

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
    //   backgroundColor: theme.palette.primary.main,
    display: `flex`,
  }
}));
const Projects: React.FC = (): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <Container disableGutters={true} className={classes.root}>
        <Typography className={classes.main} variant="h3"> Projects </Typography>

        <ProjectCards />
      </Container>
    </>
  )
}

export default Projects