import { Fragment, useContext, useEffect } from 'react'
import { TabType } from '../../components/flux/reducers/tab.reducer'
import { storeContext } from '../../components/flux/Store'
import { Travel } from './layouts/travel/Travel'

const Magicbus = props => {
    const { state, dispatch } = useContext(storeContext)

    useEffect(() => {
        if (state.tab !== 2) {
            dispatch({ type: TabType.EDIT_POS, payload: 2 })
        }
    }, [])
    return (
        <Fragment>
            <h2>Allez monte ça va être super !</h2>
            <Travel />
        </Fragment>
    )
}

export default Magicbus