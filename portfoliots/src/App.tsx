import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar'
import { Container } from '@material-ui/core';
import About from './Views/About'
import Projects from './Views/Projects'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
            <Container maxWidth='xl'>
                <Route path="/About" component={About}/>
                <Route path="/Projects" component={Projects}/>
            </Container>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
