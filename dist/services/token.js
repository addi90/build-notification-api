'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTokenForUser = exports.setTokenForUser = undefined;

var _config = require('../../config/config.json');

var setTokenForUser = exports.setTokenForUser = function setTokenForUser(userId, pushSubscription) {
    return fetch(_config.firebase_storage_url + '/users/' + userId + '.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pushSubscription)
    });
};

var getTokenForUser = exports.getTokenForUser = function getTokenForUser(userId) {
    return fetch(_config.firebase_storage_url + '/users/' + userId + '.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (data) {
        return data.json();
    }).then(function (data) {
        return JSON.parse(data);
    });
};