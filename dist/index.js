'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = require('./services/router');

_mongoose2.default.connect('mongodb://localhost:27017/names', { useMongoClient: true });

app.use((0, _morgan2.default)('combined'));
app.use(_bodyParser2.default.json());
app.use('/api', router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, function () {
  console.log('listening on port :' + PORT);
});