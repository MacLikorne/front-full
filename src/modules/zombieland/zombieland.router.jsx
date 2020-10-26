import React, { Fragment } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { ZombieSetup } from './layouts/setup'
import { ZombieSimulation } from './layouts/simulation'

export const ZombieRouter = ({ match }) => {

    return (
        <BrowserRouter>
            <Route path={`${match.path}/simulation`} component={ZombieSimulation} />
            <Route path={`${match.path}/setup`} component={ZombieSetup} />
            <Route path={`${match.path}`}>
                <Redirect to={`${match.path}/setup`} />
            </Route>
        </BrowserRouter>
    )

}