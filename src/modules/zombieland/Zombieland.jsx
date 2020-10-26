import React, { Fragment } from 'react'
import { ZombieRouter } from './zombieland.router'

const Zombieland = ({ match }) => {
    return (
        <Fragment>
            <h1>Bienvenue à Zombieland</h1>
            <ZombieRouter match={match} />
        </Fragment>
    )
}

export default Zombieland