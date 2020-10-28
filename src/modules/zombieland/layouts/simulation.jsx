import React, { Fragment, useContext, useEffect, useState } from 'react'
import { storeContext } from '../../../components/flux/Store'
import { Graphic } from '../components/graphic/graphic'
import { PopulationDto } from '../models/population.dto'
import PopService from '../services/population.service'


export const ZombieSimulation = props => {
    const { state } = useContext(storeContext)
    const [day, setDay] = useState(0)
    const [popDto, setPopDto] = useState(null)

    useEffect(() => {
        PopService.generatePop(state.pop).then(pop => setPopDto(pop))
    }, [])



    return (
        <Fragment>
            {popDto !== null ?
                <Fragment>
                    <label>Jour : {day}</label>
                    <Graphic pop={popDto.pop} infectedColor={props.infectedColor} healthyColor={props.healthyColor} />
                    <button onClick={() => { setDay(day + 1) }}> Click</button>
                </Fragment>
                : null}

        </Fragment>
    )
}
