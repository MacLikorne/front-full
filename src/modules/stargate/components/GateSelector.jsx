import { FormControl, MenuItem, Select } from '@material-ui/core'
import { Fragment } from 'react'

export const GateSelector = props => {
    let gates = ['A', 'B', 'C', 'D']

    return (
        <FormControl >
            <label >Choisissez la porte à laquelle vous vous trouvez :</label>
            <Select value={props.gate} onChange={(e) => props.select(e.target.value)}>
                {gates.map(gate => <MenuItem value={gate} key={gate}>{gate}</MenuItem>)}
            </Select>
        </FormControl>
    )
}