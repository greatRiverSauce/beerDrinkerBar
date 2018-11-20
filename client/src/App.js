import React, { Component } from 'react';
import './App.css';
import BeerPage from "./Page/BeerPage";
import DrinkerPage from "./Page/DrinkerPage";
import BarPage from "./Page/BarPage";
import ManufacturerPage from "./Page/ManufacturerPage";
import SQLInterface from "./Page/SQLInterface";
import BartenderPage from "./Page/BartenderPage";

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