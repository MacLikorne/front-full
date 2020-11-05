import { Button } from '@material-ui/core'
import { Fragment, useState } from 'react'
import { GateSelector } from '../../components/GateSelector'
import { TicketInput } from '../../components/TicketInput'
import StargateService from '../../services/stargate.service'
import { StargateDto } from '../../models/stargate.dto'
import './gate.css'

export const Gate = props => {
    const [gate, setGate] = useState('A')
    const [ticket, setTicket] = useState('A')
    let gates = ['A', 'B', 'C', 'D']
    const [way, setWay] = useState("")

    const wayToGo = () => {
        StargateService.getDirection(new StargateDto({ gate, ticket })).then(resp => setWay(resp))
    }

    return (
        <Fragment>
            <div id='gate' className='input'>
                <GateSelector gates={gates} gate={gate} select={setGate} />
            </div>
            <div id='ticket' className='input'>
                <TicketInput gates={gates} ticket={ticket} select={setTicket} />
            </div>
            <Button id='way-button' onClick={wayToGo}>Demandez votre chemin</Button>
            <div>
                <label>{way}</label>
            </div>
        </Fragment>
    )
}