import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar'
import { Container } from '@material-ui/core';
import About from './Views/About'
import Projects from './Views/Projects'
import Home from './Views/Home'

// set up theme in Index
// set up 'home page'
// style about page
// set up project page
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
            <Container maxWidth='xl'>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Projects" component={Projects}/>
            </Container>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
