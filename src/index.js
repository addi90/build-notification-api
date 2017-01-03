import Hapi from 'hapi';
import sendNotif from './handlers/sendNotif';

const server = new Hapi.Server({ 
        debug: { 
            request: ['error', 'info'] 
        } 
    })
    .connection({ port: 4567 })
    .start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    })
    .route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            request.log(['info'], request.url);
            reply('Hello, world!');
        }
    })
    .route({
        method: 'GET',
        path: '/{name}',
        handler: function (request, reply) {
            request.log(['info'], request.url);        
            reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
        }
    })
    .route({
        method: 'POST',
        path: '/payload',
        handler: function (request, reply) {
            request.log(['info'], request.payload);        
            const payload = request.payload;

            // Send notification as a side effect
            const usrToken = '';
            sendNotif(usrToken, payload);
            reply('Hello, ' + payload + '!');
        }
    });