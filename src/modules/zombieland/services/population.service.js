import { PopulationDto } from '../models/population.dto';
import { ApiService } from '../../../components/api/api.service'

class PopService extends ApiService {

    generatePop = size => {
        return fetch(`${this.url}/${size}`).then(resp => resp.json()).then(json => new this.Type(json))
    }

    patientZero = (popDto) => {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(popDto)
        }).then(resp => resp.json()).then(json => new this.Type(json))
    }
}

export default Object.freeze(new PopService(process.env.REACT_APP_ZOMBIE_BACK_PORT, "population", PopulationDto))