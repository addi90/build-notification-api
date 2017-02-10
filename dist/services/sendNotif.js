'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _webPush = require('web-push');

var _webPush2 = _interopRequireDefault(_webPush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (pushSubscription, data) {
    return _webPush2.default.sendNotification(pushSubscription, JSON.stringify(data.comment)).then(console.log).catch(console.log);
};