import { useState } from 'react'
import { GateSelector } from '../../components/GateSelector'

export const Gate = props => {
    const [gate, setGate] = useState("")

    return (
        <GateSelector gate={gate} select={setGate} />
    )
}