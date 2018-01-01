'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _itemsController = require('../controllers/itemsController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/items').get(_itemsController.getItems).post(_itemsController.insertItem);

router.route('/items/:itemId').put(_itemsController.updateItem).delete(_itemsController.deleteItem);

exports.default = router;