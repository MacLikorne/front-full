import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ZombieSetup = ({ match }) => {
    return (
        <Fragment>
            <h1>Setup</h1>
            <Link to={`${match.url}/simulation`}>Go</Link>
        </Fragment>
    )
}

export default ZombieSetup