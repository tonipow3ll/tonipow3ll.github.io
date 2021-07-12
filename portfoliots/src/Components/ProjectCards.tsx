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

  const projects = [

    {
      id: 0,
      title: 'Weather Dashboard',
      subTitle: 'A simple weather application, users can search for a city, and see previously searched cities. Current day forecast as well as 5 day forecast will populate. Made with the Open Weather Map API',
      //  imgSrc: WeatherApp,
      link: 'https://www.tonipow3ll.com/Weather-App/',
      github: 'https://github.com/tonipow3ll/Weather-App',
      selected: false
    },
    {
      id: 1,
      title: 'Easy Recipeazy',
      subTitle: 'A recipe randomizer app. Users can select ingredients and see recipes populated with those specific ingredients. ',
      // imgSrc: EasyRecipeazy,
      link: 'https://tonipow3ll.github.io/drinks-and-dinner/',
      github: 'https://github.com/tonipow3ll/drinks-and-dinner',
      selected: false
    },
    {
      id: 2,
      title: 'Bookish-Happiness',
      subTitle: `A simple "blog" application. This was made mostly for fun - and to experiment with Passport, as well as MongoDB/Mongoose, and Handlebars.`,
      // imgSrc: TechBlog,
      link: 'http://bookish-happiness.herokuapp.com',
      github: 'https://github.com/tonipow3ll/bookish-happiness',
      selected: false
    },
    {
      id: 3,
      title: 'Pupster',
      subTitle: 'A simple application that allows users to search for different dog photos based on breed, or randomly. ',
      // imgSrc: Pupster,
      link: 'https://www.tonipow3ll.com/pupster/',
      github: 'https://github.com/tonipow3ll/pupster',
      selected: false
    },
    {
      id: 4,
      title: 'Weather App (Lite)',
      subTitle: 'A simplified version of the Weather Dashboard - with this application users can load the page, and see weather data based on their current location (if location services are turned on / accepted), or enter in a city and see current weather data for that city.',
      // imgSrc: WeatherAppLite,
      link: 'https://tonipow3ll.github.io/Weather-App-Lite/',
      github: 'https://github.com/tonipow3ll/Weather-App-Lite',
      selected: false
    },
    {
      id: 5,
      title: 'Stretch n Strengthen',
      subTitle: 'An application that allows users to view different exercises based on body parts, as well as create an account and save specific routines to their profile.',
      // imgSrc: StretchnStrengthen,
      link: 'http://stretch-n-strengthen.herokuapp.com',
      github: 'https://github.com/crrmarchese/stretch-n-strengthen',
      selected: false
    }
  ]
  return (
    <div className={classes.main}>
      {console.log(projects)}
      {projects.map(project =>
        <div key={project.id}>
          <h1>{project.title}</h1>
          <p>{project.subTitle}</p>
          <div>

          <a target="_blank" href={project.link}>Deployed Application</a>
          <a target="_blank" href={project.github}>Github</a>
          </div>

        </div>)}

    </div>
  )
}

export default ProjectCards