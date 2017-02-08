const log4js = require('log4js');

log4js.configure('./src/log4j/log4j.json', { reloadSecs: 300 });
const logger = log4js.getLogger('react-redux-unify-template');
logger.setLevel('debug');
// logger.setLevel('ERROR');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

module.exports = logger;
