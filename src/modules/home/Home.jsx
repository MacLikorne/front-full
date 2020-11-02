import { Fragment, useContext, useEffect } from 'react'
import heavy from '../../assets/images/heavy.jpg'
import { TabType } from '../../components/flux/reducers/tab.reducer'
import { storeContext } from '../../components/flux/Store'

const style = {
    img: {
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }
}

const Home = props => {
    const { state, dispatch } = useContext(storeContext)

    useEffect(() => {
        if (state.tab !== 0) {
            dispatch({ type: TabType.EDIT_POS, payload: 0 })
        }
    }, [])

    return (
        <Fragment>
            <h2>Bienvenue sur ma super application !!!</h2>
            <img src={heavy} alt="heavy stuff" style={style.img} />
        </Fragment>
    )
}

export default Home