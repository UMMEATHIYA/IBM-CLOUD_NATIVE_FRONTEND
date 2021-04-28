let url='http://logger.io/log';

function log(message)
{
    console.log('hello from logger',message);
}

module.exports.log=log;