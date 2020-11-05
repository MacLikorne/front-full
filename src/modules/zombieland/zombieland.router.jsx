import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { ZombieSetup } from './layouts/setup/setup'
import { ZombieSimulation } from './layouts/simulation/simulation'

export const ZombieRouter = ({ colors }) => {
    return (
        <BrowserRouter>
            <Route exact path="/zombieland/simulation"
                render={() => <ZombieSimulation healthyColor={colors.healthyColor} infectedColor={colors.infectedColor} />}
            />
            <Route exact path="/zombieland/setup"
                render={() => <ZombieSetup {...colors} />}
            />
            <Route path="/zombieland">
                <Redirect to="/zombieland/setup" />
            </Route>
        </BrowserRouter>
    )

}