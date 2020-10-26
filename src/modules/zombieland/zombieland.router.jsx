import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

export const ZombieRouter = ({ match }) => {

    return (
        < Switch >
            <Route exact path={`${match.path}`} component={lazy(() => import('./layouts/setup'))} />
            <Route exact path={`${match.path}/simulation`} component={lazy(() => import('./layouts/simulation'))} />
        </Switch >
    )

}