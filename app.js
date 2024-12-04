import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import MomentsScreen from './screens/MomentsScreen';
import HealthScreen from './screens/HealthScreen';
import LactationScreen from './screens/LactationScreen';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/momentos" component={MomentsScreen} />
                <Route path="/salud" component={HealthScreen} />
                <Route path="/lactancia" component={LactationScreen} />
            </Switch>
        </Router>
    );
}
