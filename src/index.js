require('isomorphic-fetch');
import fs from 'fs';
import Hapi from 'hapi';
import Http2 from 'http2';

import routes from './routes';
import { initializeWebPush } from './services/webPush';

const server = new Hapi.Server({ 
    debug: { 
        request: ['error', 'info'] 
    } 
});

const listener = Http2.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
})

if (!listener.address) {
  listener.address = function() {
    return this._server.address()
  }
}

const port = process.env.PORT || 4567
server.connection({ 
    port
});

server.route(routes);

initializeWebPush();
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
