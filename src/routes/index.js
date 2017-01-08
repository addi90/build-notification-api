import bunyan from 'bunyan';

const log = bunyan.createLogger({
    name: "build-notification-api"
});

export default [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            log.info(request.url);
            reply('Hello, world!');
        }
    },

    {
        method: 'POST',
        path: '/token',
        handler: function (request, reply) {
            log.info(request.payload);        
            const { userId = 1, token } = JSON.parse(request.payload);
            setTokenForUser(userId, token);
            
            reply('Hello, ' + request.payload + '!');
        }
    },

    {
        method: 'POST',
        path: '/payload',
        handler: function (request, reply) {
            log.info(request.payload);        
            const { userId = 1 } = request.payload;

            // Send notification as a side effect
            const usrToken = getTokenForUser(userId);
            sendNotif(usrToken, request.payload);
            reply('Hello, ' + request.payload + '!');
        }
    } 
];