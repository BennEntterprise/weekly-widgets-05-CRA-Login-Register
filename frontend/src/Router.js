import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'

const Router = () => {
    return (
        
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Home} />

        </Switch>
    )
}
export default Router;