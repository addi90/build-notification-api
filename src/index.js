require('isomorphic-fetch');

import Hapi from 'hapi';
import sendNotif from './handlers/sendNotif';

const server = new Hapi.Server({ 
    debug: { 
        request: ['error', 'info'] 
    } 
});
    
server.connection({ port: 4567 });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        request.log(['info'], request.url);
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        request.log(['info'], request.url);        
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
})

server.route({
    method: 'POST',
    path: '/payload',
    handler: function (request, reply) {
        request.log(['info'], request.payload);        
        const payload = request.payload;

        // Send notification as a side effect
        const usrToken = 'BGs20gh1-DjFaBOSuTPWAZ-0yVVsD6UTgN21mHHaql_akxzgvlcfs5A6FvFXjDG7pfsk_bHqxq1YEUZSPmIL5rY=';
        sendNotif(usrToken, payload);
        reply('Hello, ' + payload + '!');
    }
});