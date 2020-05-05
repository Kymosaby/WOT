import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/containers/Header"
import HomePage from './pages/HomePage';
import Requests from './pages/Requests'
import Tasks from "./pages/Tasks"
import NotFound from './components/NotFound';

import "./Layout.css"

const createRoutes = () => {
    return (
        <div className = "gridContainer">    
            <Header />
            <Switch>
                <Route exact path = "/" component = { HomePage } />
                <Route path = "/requests" component = { Requests } />
                <Route path = "/tasks" component = { Tasks } />
                <Route component = { NotFound } />
            </Switch>
        </div>
    )
}

export default createRoutes;
