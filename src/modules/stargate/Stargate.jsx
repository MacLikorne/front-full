import { Fragment, useContext, useEffect } from 'react'
import { TabType } from '../../components/flux/reducers/tab.reducer'
import { storeContext } from '../../components/flux/Store'
import { Gate } from './layouts/gate/Gate'

const Stargate = props => {
    const { state, dispatch } = useContext(storeContext)

    useEffect(() => {
        if (state.tab !== 3) {
            dispatch({ type: TabType.EDIT_POS, payload: 3 })
        }
    }, [])
    return (
        <Fragment>
            <h2>Mes respects à Toutankhamon, duc** !</h2>
            <Gate />
        </Fragment>
    )
}

export default Stargate