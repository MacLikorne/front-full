import { MemoryRouter, Redirect, Route } from 'react-router-dom'
import { ZombieSetup } from './layouts/setup/setup'
import { ZombieSimulation } from './layouts/simulation/simulation'

export const ZombieRouter = ({ colors }) => {
    return (
        <MemoryRouter>
            <Route exact path="/simulation"
                render={() => <ZombieSimulation healthyColor={colors.healthyColor} infectedColor={colors.infectedColor} />}
            />
            <Route exact path="/setup"
                render={() => <ZombieSetup {...colors} />}
            />
            <Route path="/">
                <Redirect to="/setup" />
            </Route>
        </MemoryRouter>
    )

}