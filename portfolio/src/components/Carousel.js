import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Card from '../components/Card'
import StretchnStrengthen from '../assets/images/StretchNStrengthen.png'
import TechBlog from '../assets/images/TechBlog.png'
import WeatherAppLite from '../assets/images/WeatherAppLite.png'

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
                        link: '',
                        github: '',
                        selected: false
                    },
                    {
                        id: 1, 
                        title: 'Fake Blog', 
                        subTitle: 'THE place to blog your thoughts',
                        imgSrc: TechBlog,
                        link: '',
                        github: '',
                        selected: false
                    },
                    {
                        id: 2, 
                        title: 'Weather App (Lite)', 
                        subTitle: 'THE only weather app you need... for todays weather only. ',
                        imgSrc: WeatherAppLite,
                        link: '',
                        github: '',
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
                   <Container fluid={true}>
                       <Row className="justify-content-around pr-5">
                        {this.makeItems(this.state.items)}
                       </Row>
                   </Container>
                );
        }
    }


export default Carousel;