import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BeerPage from "./client/BeerPage";
import DrinkerPage from "./client/DrinkerPage";
import BarPage from "./client/BarPage";
import ManufacturerPage from "./client/ManufacturerPage";
import SQLInterface from "./client/SQLInterface";
import BartenderPage from "./client/BartenderPage";

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={SQLInterface} />
                <Route path="/beer/:beerName" component={BeerPage} />
                <Route path="/drinker/:drinkerName" component={DrinkerPage} />
                <Route path="/bar/:barName" component={BarPage} />
                <Route path="/manufacturer/:manufacturerName" component={ManufacturerPage} />
                <Route path="/bartenders" component={BartenderPage} />
            </div>
        </Router>
    );
  }
}

export default App;
