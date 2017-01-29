import log from '../logger';
import { setTokenForUser } from '../services/token'

export default (request, reply) => {
    log.info(request.payload);        
    const { userId = 1, token } = request.payload;
    setTokenForUser(userId, token);
    
    reply('Hello, ' + request.payload + '!');
};