import React from 'react';

import { Container, Jumbotron, Row } from 'react-bootstrap';
import Card from '../components/Card'
import StretchnStrengthen from '../assets/images/StretchNStrengthen.png'
import TechBlog from '../assets/images/TechBlog.png'
import WeatherAppLite from '../assets/images/WeatherAppLite.png'
import EasyRecipeazy from '../assets/images/EasyRecipeazy.png'

class Carousel extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                items: [
                    {
                        id: 0, 
                        title: 'Stretch n Strengthen', 
                        subTitle: 'THE Workout DB',
                        imgSrc: StretchnStrengthen,
                        link: 'http://stretch-n-strengthen.herokuapp.com',
                        github: 'https://github.com/crrmarchese/stretch-n-strengthen',
                        selected: false
                    },
                    {
                        id: 1, 
                        title: 'Bookish-Happiness', 
                        subTitle: 'THE place to blog your thoughts',
                        imgSrc: TechBlog,
                        link: 'http://bookish-happiness.herokuapp.com',
                        github: 'https://github.com/tonipow3ll/bookish-happiness',
                        selected: false
                    },
                    {
                        id: 2, 
                        title: 'Easy Recipeazy', 
                        subTitle: 'THE best recipe (randomizer) app there is ',
                        imgSrc: EasyRecipeazy,
                        link: 'https://tonipow3ll.github.io/drinks-and-dinner/',
                        github: 'https://github.com/tonipow3ll/drinks-and-dinner',
                        selected: false
                    },
                    {
                        id: 3, 
                        title: 'Weather App (Lite)', 
                        subTitle: 'THE only weather app you need... for todays weather only. *Created with OpenWeatherMap API*',
                        imgSrc: WeatherAppLite,
                        link: 'https://tonipow3ll.github.io/Weather-App-Lite/',
                        github: 'https://github.com/tonipow3ll/Weather-App-Lite',
                        selected: false
                    },
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
                       <Row className="justify-content-around pr-5">
                        {this.makeItems(this.state.items)}
                       </Row>
                   </Container>
                 </Jumbotron>
                );
        }
    }


export default Carousel;