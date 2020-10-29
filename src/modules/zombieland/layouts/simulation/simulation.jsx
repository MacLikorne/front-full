import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../../../../components/flux/Store'
import { Graphic } from '../../components/graphic/graphic'
import PopService from '../../services/population.service'
import './simulation.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import { ProgressBar } from '../../components/ProgressBar'


export const ZombieSimulation = props => {
    const { state } = useContext(storeContext)
    const [day, setDay] = useState(0)
    const [popDto, setPopDto] = useState(null)
    console.log(process.env)

    useEffect(() => {
        PopService.generatePop(state.pop).then(pop => setPopDto(pop))
    }, [])



    return (
        <div id='container'>
            {popDto !== null ?
                <div id='simulation'>
                    <label id='day'>Jour : {day}</label>
                    <Graphic pop={popDto.pop} infectedColor={props.infectedColor} healthyColor={props.healthyColor} id='graphic' />
                    <div id='prog-bar'>
                        <ProgressBar value={10} />
                    </div>
                </div>
                : null}

        </div>
    )
}
