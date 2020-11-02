import { Fragment, useContext, useEffect, useState } from 'react'
import { TabType } from '../../components/flux/reducers/tab.reducer'
import { storeContext } from '../../components/flux/Store'
import { ZombieRouter } from './zombieland.router'

const Zombieland = ({ match }) => {
    const [healthyColor, setHealthyColor] = useState("rgb(0,193,213)")
    const [infectedColor, setInfectedColor] = useState("rgb(255,0,0)")
    const { state, dispatch } = useContext(storeContext)

    useEffect(() => {
        if (state.tab !== 1) {
            dispatch({ type: TabType.EDIT_POS, payload: 1 })
        }
    }, [])

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