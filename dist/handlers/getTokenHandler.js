'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _token = require('../services/token');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (request, reply) {
    _logger2.default.info(request.query);
    var _request$query$userId = request.query.userId,
        userId = _request$query$userId === undefined ? 1 : _request$query$userId;


    (0, _token.getTokenForUser)(userId).then(reply).catch(reply);
};