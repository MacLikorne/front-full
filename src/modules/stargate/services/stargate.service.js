import { StargateDto } from '../models/stargate.dto';
import { ApiService } from '../../../components/api/api.service'

class StargateService extends ApiService {

    getDirection = (stargateDto) => {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(stargateDto)
        }).then(resp => resp.text())
    }

}

export default Object.freeze(new StargateService(process.env.REACT_APP_STARGATE_BACK_PORT, "stargate", StargateDto))