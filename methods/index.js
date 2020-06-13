const methods = {};     

methods.authentication = require('./authentication')
methods.book = require('./book')
methods.user = require('./user')

module.exports = methods;