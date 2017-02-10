'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initializeWebPush = undefined;

var _webPush = require('web-push');

var _webPush2 = _interopRequireDefault(_webPush);

var _config = require('../../config/config.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initializeWebPush = exports.initializeWebPush = function initializeWebPush() {
    // Uncomment this if need to generate new VAPID keys
    // const vapidKeys = webpush.generateVAPIDKeys();
    // console.log('Vapid keys', vapidKeys);

    _webPush2.default.setGCMAPIKey('776464732646');
    _webPush2.default.setVapidDetails('mailto:adisinghrajput@gmail.com', _config.vapidPublicKey, _config.vapidPrivateKey);
};