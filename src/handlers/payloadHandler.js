import log from '../logger';
import sendNotif from '../services/sendNotif';
import { getTokenForUser } from '../services/token';

export default (request, reply) => {
    log.info(request.payload);        
    const { userId = 1 } = request.payload;

    // Send notification as a side effect
    getTokenForUser(userId)
        .then(pushSubscription => 
            sendNotif(pushSubscription, request.payload));
        
    reply('Hello, ' + request.payload + '!');
};