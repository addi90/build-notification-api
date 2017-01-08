//TODO: Migrate to a HAPI plugin
import bunyan from 'bunyan';

const logger = bunyan.createLogger({
    name: "build-notification-api"
});

export default logger;