import React, { Fragment, useState } from 'react'
import { ZombieRouter } from './zombieland.router'

const Zombieland = ({ match }) => {
    const [healthyColor, setHealthyColor] = useState("rgb(0,193,213)")
    const [infectedColor, setInfectedColor] = useState("rgb(255,0,0)")

    return (
        <Fragment>
            <h2>Règle n°3 : méfiez-vous des toilettes.</h2>
            <ZombieRouter match={match}
                colors={{ healthyColor, setHealthyColor, infectedColor, setInfectedColor }}
            />
        </Fragment>
    )
}

export default Zombieland