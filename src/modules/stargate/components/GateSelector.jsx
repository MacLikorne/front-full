import { FormControl, MenuItem, Select } from '@material-ui/core'

export const GateSelector = props => {

    return (
        <FormControl >
            <label >Choisissez la porte à laquelle vous vous trouvez :</label>
            <Select value={props.gate} onChange={(e) => props.select(e.target.value)}>
                {props.gates.map(gate => <MenuItem value={gate} key={gate}>{gate}</MenuItem>)}
            </Select>
        </FormControl>
    )
}