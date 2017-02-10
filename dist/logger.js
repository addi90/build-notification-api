"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bunyan = require("bunyan");

var _bunyan2 = _interopRequireDefault(_bunyan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = _bunyan2.default.createLogger({
    name: "build-notification-api"
}); //TODO: Migrate to a HAPI plugin
exports.default = logger;