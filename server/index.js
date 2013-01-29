
var express = require('express');
var app = express();

require('./homeRoutes')(app);
/* Required Route Files */

module.exports = app;
