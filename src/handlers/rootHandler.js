import log from '../logger';

const rootHandler = (request, reply) => {
    log.info(request.url);
    reply('Hello, world!');
};

export default rootHandler;