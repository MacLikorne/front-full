import { AppBar, Tabs, Tab, Button, Toolbar } from '@material-ui/core'
import { Fragment, useContext, useEffect, useState } from 'react'
import BusIcon from '@material-ui/icons/DirectionsBus'
import StarIcon from '@material-ui/icons/LocalActivityOutlined';
import HomeIcon from '@material-ui/icons/Home';
import SnoozeIcon from '@material-ui/icons/Snooze';
import SatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import './menu.css'
import { storeContext } from '../flux/Store';
import { TabType } from '../flux/reducers/tab.reducer';
import { useHistory } from 'react-router-dom';
import { NiceModal } from '../nice-modal/NiceModal';

export const Menu = props => {
    const { state, dispatch } = useContext(storeContext)
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        history.push('/home')
    }, [history])

    const push = (location) => {
        if (!history.location.pathname.includes(location)) {
            history.replace(location)
        }
    }

    return (
        <Fragment>
            <AppBar position="static" >
                <Toolbar >
                    <Tabs value={state.tab} onChange={(e, value) => { dispatch({ type: TabType.EDIT_POS, payload: value }) }}>
                        <Tab label="Maison" icon={<HomeIcon />} onClick={() => push('home')} />
                        <Tab label="Zombieland" icon={<SnoozeIcon />} onClick={() => push('zombieland')} />
                        <Tab label="Bus Magique" icon={<BusIcon />} onClick={() => push('magicbus')} />
                        <Tab label="Porte des étoiles" icon={<StarIcon />} onClick={() => push('stargate')} />
                    </Tabs>
                    <Button color="inherit" id='magic-button' onClick={() => { setShowModal(!showModal) }}>
                        <SatisfiedIcon />
                    </Button>
                </Toolbar>
            </AppBar >
            <NiceModal show={showModal} close={() => { setShowModal(!showModal) }} />
        </Fragment>
    )
}