'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _http = require('http2');

var _http2 = _interopRequireDefault(_http);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _webPush = require('./services/webPush');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('isomorphic-fetch');


var server = new _hapi2.default.Server({
    debug: {
        request: ['error', 'info']
    }
});

var listener = _http2.default.createServer({
    key: _fs2.default.readFileSync('./key.pem'),
    cert: _fs2.default.readFileSync('./cert.pem')
});

if (!listener.address) {
    listener.address = function () {
        return this._server.address();
    };
}

var port = process.env.PORT || 4567;
server.connection({
    port: port
});

server.route(_routes2.default);

(0, _webPush.initializeWebPush)();
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at: ' + server.info.uri);
});