import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import resume from '../src/assets/TPResume.pdf'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Toni Powell',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' }
      ],
      home: {
        title: 'Toni Powell',
        subTitle: 'Full Stack Developer',
        text: 'Checkout my projects below',
      },
      about: {
        title: 'About Me'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Toni Powell</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                {/* <a className="nav-link" href="#about" smooth={true} duration={1000}>About</a> */}
                <a className="nav-link" href="https://github.com/tonipow3ll" target="_blank">Github</a>
                <a className="nav-link" href="https://www.linkedin.com/in/tonipowell13/" target="_blank">LinkedIn</a>
                <a className="nav-link" href={resume} target="_blank">Resume</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> */}
          {/* <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} /> 
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} /> */}
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
      

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;