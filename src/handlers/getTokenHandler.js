import log from '../logger';
import { getTokenForUser } from '../services/token'

export default (request, reply) => {
    log.info(request.query);        
    const { userId = 1 } = request.query;
    
    getTokenForUser(userId)
        .then(reply)
        .catch(reply)    
};