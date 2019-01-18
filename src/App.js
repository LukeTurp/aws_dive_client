import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import LandingPage from './components/landingPage';
import Participation from './components/participation';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/participate' component={Participation} />
                </Switch>
            </Router>
        );
    }
}

export default App;
