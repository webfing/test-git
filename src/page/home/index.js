const http = require('http');
const Logger = require('../../libs/logger/Logger');

const Formatter = require('../../libs/logger/Formatter');
const ServerAppender = require('../../libs/logger/ServerAppender');
const logger = new Logger(new ServerAppender(new Formatter()));

const IMAppender = require('../../libs/logger/IMAppender');
const logger.addAppender(new IMAppender(new Formatter()));

const server = http.createrServer((req, res) => {
	res.end();
});

server.listen(8888);
logger.info('server running at 8888');