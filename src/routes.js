import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

export default (
    <Switch>
        
         <Route exact path='/' component={Home} />
         <Route path="/about" component={About} />
    </Switch>
)
