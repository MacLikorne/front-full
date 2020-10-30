import { PopulationDto } from '../models/population.dto';
import { ApiService } from '../../../components/api/api.service'

class ZombieService extends ApiService {

    infect = (popDto) => {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(popDto)
        }).then(resp => resp.json()).then(json => new this.Type(json))
    }

}

export default Object.freeze(new ZombieService(process.env.REACT_APP_ZOMBIE_BACK_PORT, "zombies", PopulationDto))