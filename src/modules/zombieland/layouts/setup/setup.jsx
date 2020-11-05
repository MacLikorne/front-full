import { Fragment, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Slider from '@material-ui/core/Slider';
import { storeContext } from '../../../../components/flux/Store';
import { ColorPicker } from '../../components/ColorPicker';
import { Button } from '@material-ui/core';
import { PopType } from '../../../../components/flux/reducers/pop.reducer';

const choices = [
    {
        value: 1,
        label: "1"
    },
    {
        value: 2,
        label: "8"
    },
    {
        value: 3,
        label: "27"
    },
    {
        value: 4,
        label: "64"
    },
    {
        value: 5,
        label: "125"
    }
]

export const ZombieSetup = (props) => {
    const { state, dispatch } = useContext(storeContext)
    const history = useHistory()
    let pop = state.pop

    const simulate = () => {
        dispatch({ type: PopType.EDIT_POP, payload: pop })
        history.push('simulation')
    }

    useEffect(() => {
        return () => {
            if (pop !== state.pop) {
                dispatch({ type: PopType.EDIT_POP, payload: pop })
            }
        }
    })

    return (
        <Fragment>
            <label style={{ display: 'block' }}>Choissisez la taille de la population :</label>
            <Slider
                defaultValue={state.pop}
                step={1}
                marks={choices}
                min={1}
                max={5}
                style={{ width: ' 50%', margin: '1%' }}
                getAriaValueText={(value) => pop = value}
            />
            <label style={{ display: 'block' }}>Choissisez les couleurs de la simulation :</label>
            <div style={{ display: 'flex' }}>
                <ColorPicker label='Couleur saine'
                    color={props.healthyColor}
                    changeColor={props.setHealthyColor}
                    style={{ margin: '1%' }}
                />

                <ColorPicker label='Couleur infectée'
                    color={props.infectedColor}
                    changeColor={props.setInfectedColor}
                    style={{ margin: '1%' }}
                />
            </div>
            <Button onClick={simulate}>Lancer la simulation</Button>

        </Fragment>
    )
}
