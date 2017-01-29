import {
    payloadHandler,
    rootHandler,
    getTokenHandler,
    saveTokenHandler
} from '../handlers';

export default [
    {
        method: 'GET',
        path: '/',
        handler: rootHandler
    },

    {
        method: 'POST',
        path: '/payload',
        handler: payloadHandler
    },

    {
        method: 'POST',
        path: '/token',
        handler: saveTokenHandler
    },

    {
        method: 'GET',
        path: '/token',
        handler: getTokenHandler
    } 
];