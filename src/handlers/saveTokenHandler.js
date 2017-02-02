import log from '../logger';
import { setTokenForUser } from '../services/token'

export default (request, reply) => {
    log.info(request.payload);        
    const { userId = 1 } = request.payload;
    setTokenForUser(userId, request.payload);
    
    reply('Hello, ' + request.payload + '!');
};