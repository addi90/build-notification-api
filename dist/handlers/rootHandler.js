'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootHandler = function rootHandler(request, reply) {
    _logger2.default.info(request.url);
    reply('Hello, world!');
};

exports.default = rootHandler;