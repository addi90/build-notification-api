'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _token = require('../services/token');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (request, reply) {
    _logger2.default.info(request.payload);
    var _request$payload$user = request.payload.userId,
        userId = _request$payload$user === undefined ? 1 : _request$payload$user;

    (0, _token.setTokenForUser)(userId, request.payload);

    reply('Hello, ' + request.payload + '!');
};