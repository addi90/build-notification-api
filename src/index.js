require('isomorphic-fetch');

import Hapi from 'hapi';
import sendNotif from './handlers/sendNotif';
import { getTokenForUser, setTokenForUser } from './handlers/token'

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
});

server.route({
    method: 'POST',
    path: '/token',
    handler: function (request, reply) {
        request.log(['info'], request.payload);        
        const { userId = 1, token } = JSON.parse(request.payload);
        setTokenForUser(userId, token);
        
        reply('Hello, ' + request.payload + '!');
    }
});

server.route({
    method: 'POST',
    path: '/payload',
    handler: function (request, reply) {
        request.log(['info'], request.payload);        
        const { userId = 1 } = request.payload;

        // Send notification as a side effect
        const usrToken = getTokenForUser(userId);//'BGs20gh1-DjFaBOSuTPWAZ-0yVVsD6UTgN21mHHaql_akxzgvlcfs5A6FvFXjDG7pfsk_bHqxq1YEUZSPmIL5rY=';
        sendNotif(usrToken, request.payload);
        reply('Hello, ' + request.payload + '!');
    }
});