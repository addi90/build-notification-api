'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handlers = require('../handlers');

exports.default = [{
    method: 'GET',
    path: '/',
    handler: _handlers.rootHandler
}, {
    method: 'POST',
    path: '/payload',
    handler: _handlers.payloadHandler
}, {
    method: 'POST',
    path: '/token',
    handler: _handlers.saveTokenHandler
}, {
    method: 'GET',
    path: '/token',
    handler: _handlers.getTokenHandler
}, {
    method: 'GET',
    path: '/authorize',
    handler: _handlers.authorizeHandler
}];