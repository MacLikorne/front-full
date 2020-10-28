import { PopulationDto } from '../models/population.dto';
import { ApiService } from '../../../components/api/api.service'

class PopService extends ApiService {
    constructor(port, endpoint, Type) {
        super(port, endpoint, Type)
    }

    generatePop = size => {
        return fetch(`${this.url}/${size}`).then(resp => resp.json()).then(json => new this.Type(json))
    }
}

export default Object.freeze(new PopService(3001, "population", PopulationDto))