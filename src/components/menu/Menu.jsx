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
        if (history.location.pathname.lastIndexOf('/') > 0) {
            history.push(history.location.pathname.slice(0, history.location.pathname.lastIndexOf('/')))
        }
    }, [history])

    return (
        <Fragment>
            <AppBar position="static" >
                <Toolbar >
                    <Tabs value={state.tab} onChange={(e, value) => { dispatch({ type: TabType.EDIT_POS, payload: value }) }}>
                        <Tab label="Maison" icon={<HomeIcon />} onClick={() => history.push('home')} />
                        <Tab label="Zombieland" icon={<SnoozeIcon />} onClick={() => history.push('zombieland')} />
                        <Tab label="Bus Magique" icon={<BusIcon />} onClick={() => history.push('magicbus')} />
                        <Tab label="Porte des étoiles" icon={<StarIcon />} onClick={() => history.push('stargate')} />
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