var log4js = require('log4js');
log4js.configure('./src/log4j/log4j.json', { cwd: __dirname, reloadSecs: 300 });

var logger = log4js.getLogger();

// logger.setLevel('ERROR');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

module.exports = logger;
