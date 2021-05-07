import React from 'react';

import { Container, Jumbotron, Row } from 'react-bootstrap';
import Card from '../components/Card';
import StretchnStrengthen from '../assets/images/StretchNStrengthen.png';
import TechBlog from '../assets/images/TechBlog.png';
import WeatherAppLite from '../assets/images/WeatherAppLite.png';
import EasyRecipeazy from '../assets/images/EasyRecipeazy.png';
import WeatherApp from '../assets/images/Weather-App.png';
import Pupster from '../assets/images/Pupster.png';

class Carousel extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                items: [
                    {
                        id: 0, 
                        title: 'Weather Dashboard', 
                        subTitle: 'A simple weather application, users can search for a city, and see previously searched cities. Current day forecast as well as 5 day forecast will populate. Made with the Open Weather Map API',
                        imgSrc: WeatherApp,
                        link: 'https://www.tonipow3ll.com/Weather-App/',
                        github: 'https://github.com/tonipow3ll/Weather-App',
                        selected: false
                    },
                    {
                        id: 1, 
                        title: 'Easy Recipeazy', 
                        subTitle: 'A recipe randomizer app. Users can select ingredients and see recipes populated with those specific ingredients. ',
                        imgSrc: EasyRecipeazy,
                        link: 'https://tonipow3ll.github.io/drinks-and-dinner/',
                        github: 'https://github.com/tonipow3ll/drinks-and-dinner',
                        selected: false
                    },
                    {
                        id: 2, 
                        title: 'Bookish-Happiness', 
                        subTitle: `A simple "blog" application. This was made mostly for fun - and to experiment with Passport, as well as MongoDB/Mongoose, and Handlebars.`,
                        imgSrc: TechBlog,
                        link: 'http://bookish-happiness.herokuapp.com',
                        github: 'https://github.com/tonipow3ll/bookish-happiness',
                        selected: false
                    },
                    {
                        id: 3, 
                        title: 'Pupster', 
                        subTitle: 'The dog app',
                        imgSrc: Pupster,
                        link: '',
                        github: '',
                        selected: false
                    },
                    {
                        id: 4, 
                        title: 'Weather App (Lite)', 
                        subTitle: 'A simplified version of the Weather Dashboard - with this application users can load the page, and see weather data based on their current location (if location services are turned on / accepted), or enter in a city and see current weather data for that city.',
                        imgSrc: WeatherAppLite,
                        link: 'https://tonipow3ll.github.io/Weather-App-Lite/',
                        github: 'https://github.com/tonipow3ll/Weather-App-Lite',
                        selected: false
                    },
                    {
                        id: 5, 
                        title: 'Stretch n Strengthen', 
                        subTitle: 'An application that allows users to view different exercises based on body parts, as well as create an account and save specific routines to their profile.',
                        imgSrc: StretchnStrengthen,
                        link: 'http://stretch-n-strengthen.herokuapp.com',
                        github: 'https://github.com/crrmarchese/stretch-n-strengthen',
                        selected: false
                    }
                ]
            }

        } 

        handleCardClick = (id, card) => {
            let items = [...this.state.items]

            items[id].selected = items[id].selected ? false : true

            items.forEach(item => {
                if(item.id !== id) {
                    item.selected = false;
                }
            });

            this.setState({
                items
            });
        }

        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
            })
        }
            render () {
                return(
                    <Jumbotron className="bg-transparent jumbotron-fluid p-0 ">

                   <Container className="projects" fluid={true}>
                       <h1 className="projects">Projects</h1>
                       <Row className="justify-content-around pr-5 mr-5">
                        {this.makeItems(this.state.items)}
                       </Row>
                   </Container>
                 </Jumbotron>
                );
        }
    }


export default Carousel;