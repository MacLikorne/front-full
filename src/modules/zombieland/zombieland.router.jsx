import React, { Fragment } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { ZombieSetup } from './layouts/setup/setup'
import { ZombieSimulation } from './layouts/simulation/simulation'

export const ZombieRouter = ({ match, colors }) => {
    return (
        <BrowserRouter>
            <Route path={`${match.path}/simulation`}
                render={() => <ZombieSimulation healthyColor={colors.healthyColor} infectedColor={colors.infectedColor} />}
            />
            <Route path={`${match.path}/setup`}
                render={() => <ZombieSetup {...colors} />}
            />
            <Route path={`${match.path}`}>
                <Redirect to={`${match.path}/setup`} />
            </Route>
        </BrowserRouter>
    )

}