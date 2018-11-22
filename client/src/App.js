import React, { Component } from 'react';
import './App.css';
import BeerPage from "./Page/BeerPage";
import DrinkerPage from "./Page/DrinkerPage";
import BarPage from "./Page/BarPage";
import ManufacturerPage from "./Page/ManufacturerPage";
import SQLInterface from "./Page/SQLInterface";
import BartenderPage from "./Page/BartenderPage";
import BeerHomePage from "./Page/BeerHomePage";
import BarHomePage from "./Page/BarHomePage";
import DrinkerHomePage from "./Page/DrinkerHomePage";
import ManuHomePage from './Page/ManuHomePage';
import HomePage from "./Page/HomePage";
import {Navbar, Nav, NavItem, Jumbotron, Button} from "react-bootstrap";


import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Bar Beer Drinker</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/bar">
                        Bars
                    </NavItem>
                    <NavItem eventKey={2} href="/drinker">
                        Drinkers
                    </NavItem>
                    <NavItem eventKey={3} href="/beer">
                        Beers
                    </NavItem>
                    <NavItem eventKey={4} href="/manufacturer">
                        Manufacturers
                    </NavItem>
                    <NavItem eventKey={5} href="/bartenders">
                        Bartenders
                    </NavItem>
                    <NavItem eventKey={6} href="/sql">
                        SQL Interface
                    </NavItem>
                </Nav>
            </Navbar>
            <Router>
                <div className="App">
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/sql" component={SQLInterface} />
                    <Route path="/beer/:beerName" component={BeerPage} />
                    <Route path="/beer" component={BeerHomePage} />
                    <Route path="/drinker/:drinkerName" component={DrinkerPage} />
                    <Route path="/drinker" component={DrinkerHomePage} />
                    <Route path="/bar/:barName" component={BarPage} />
                    <Route path="/bar" component={BarHomePage} />
                    <Route path="/manufacturer/:manufacturerName" component={ManufacturerPage} />
                    <Route path="/manufacturer" component={ManuHomePage} />
                    <Route path="/bartenders" component={BartenderPage} />
                </div>
            </Router>
        </div>

    );
  }
}

export default App;