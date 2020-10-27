import React, { Fragment } from 'react'
import { ZombieRouter } from './zombieland.router'

const Zombieland = ({ match }) => {
    return (
        <Fragment>
            <ZombieRouter match={match} />
        </Fragment>
    )
}

export default Zombieland