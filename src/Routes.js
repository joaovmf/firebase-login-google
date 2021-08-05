import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Config from './pages/config'


/* eslint-disable */
export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/config">
                <Config/>
            </Route>
        </Switch>
    )
}