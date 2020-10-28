import { PopulationDto } from '../models/population.dto';
import { ApiService } from '../../../components/api/api.service'

class ZombieService extends ApiService {
    constructor(port, endpoint, Type) {
        super(port, endpoint, Type)
    }


}

export default Object.freeze(new ZombieService(3000, "zombies", PopulationDto))