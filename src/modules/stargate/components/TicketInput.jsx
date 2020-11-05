import { FormControl, MenuItem, Select } from '@material-ui/core'

export const TicketInput = props => {
    return (
        <FormControl >
            <label >Entrez les informations de votre ticket :</label>
            <div>
                <Select value={props.ticket} onChange={(e) => props.select(e.target.value)}>
                    {props.gates.map(gate => <MenuItem value={gate} key={gate}>{gate}</MenuItem>)}
                </Select>
                <input />
            </div>

        </FormControl>
    )
}