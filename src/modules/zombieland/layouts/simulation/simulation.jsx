import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../../../../components/flux/Store'
import { Graphic } from '../../components/graphic/graphic'
import PopService from '../../services/population.service'
import ZombieService from '../../services/zombie.service'
import './simulation.css'
import { ProgressBar } from '../../components/ProgressBar'
import { Button } from '@material-ui/core'


export const ZombieSimulation = props => {
    const { state } = useContext(storeContext)
    const [day, setDay] = useState(0)
    const [popDto, setPopDto] = useState(null)

    useEffect(() => {
        PopService.generatePop(state.pop).then(pop => setPopDto(pop))
    }, [state.pop])

    const infect = async () => {
        if (day === 0) {
            await PopService.patientZero(popDto).then(pop => setPopDto(pop))
        } else {
            await ZombieService.infect(popDto).then(pop => setPopDto(pop))
        }
        setDay(day + 1)
    }

    // useEffect(() => {
    //     if (popDto?.infectedRatio !== null && popDto?.infectedRatio < 100) {
    //         console.log(popDto?.infectedRatio)
    //         simulate()
    //     }
    // }, [popDto?.infectedRatio])

    const simulate = () => {
        setTimeout(async () => {
            await infect()
            console.log(popDto.infectedRatio)
        }, 3000)

    }


    return (
        <div id='container'>
            {popDto !== null ?
                <div id='simulation'>
                    <label className='right'>Jour : {day}</label>
                    <Graphic pop={popDto.pop} infectedColor={props.infectedColor} healthyColor={props.healthyColor} id='graphic' />
                    <div id='prog-bar'>
                        <ProgressBar value={popDto.infectedRatio} />
                    </div>
                    <Button onClick={simulate} className='right' disabled={popDto.infectedRatio >= 100}>Jour suivant</Button>
                </div>
                : null}

        </div>
    )
}
