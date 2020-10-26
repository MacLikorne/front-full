import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const ZombieSetup = (props) => {
    return (
        <Fragment>
            <h1>Setup</h1>
            <Link to='/zombieland/simulation'>Go</Link>
        </Fragment>
    )
}
