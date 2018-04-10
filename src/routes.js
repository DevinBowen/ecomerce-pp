import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Mens from './components/mens/mens';
import Womens from './components/womens/womens';
import Kids from './components/kids/kids';
import Shoes from './components/shoes/shoes';
import Equipment from './components/equipment';
import Explore from './components/explore';

export default (
    <Switch>
        
         <Route exact path='/' component={Home} />
         <Route path="/mens" component={Mens} />
         <Route path="/womens" component={Womens} />
         <Route path="/kids" component={Kids} />
         <Route path="/shoes" component={Shoes} />
         <Route path="/equipment" component={Equipment} />
         <Route path="/explore" component={Explore} />
    </Switch>
)
