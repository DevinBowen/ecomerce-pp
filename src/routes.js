import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Mens from './components/mens/mens';
import Womens from './components/womens/womens';
import Kids from './components/kids/kids';
import Shoes from './components/shoes/shoes';
import Equipment from './components/equipment';
import Explore from './components/explore';
import MensNew from './components/mens/MensNew';

export default (
    <Switch>
        {/* main */}
        <Route exact path='/' component={Home} />
        <Route exact path="/mens" component={Mens} />
        <Route exact path="/womens" component={Womens} />
        <Route exact path="/kids" component={Kids} />
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/equipment" component={Equipment} />
        <Route path="/explore" component={Explore} />

        {/* mens */}
        <Route path="/mens/mensnew" component={MensNew} />

    </Switch>
)
